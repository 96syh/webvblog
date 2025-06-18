import { Client } from '@notionhq/client'

// Initialize the client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  published: boolean
  readTime?: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      console.warn('Notion database ID not found, returning mock data')
      return getMockBlogPosts()
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    })

    return response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
        description: properties.Description?.rich_text?.[0]?.plain_text || '',
        date: properties.Date?.date?.start || new Date().toISOString(),
        slug: properties.Slug?.rich_text?.[0]?.plain_text || page.id,
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        published: properties.Published?.checkbox || false,
        readTime: properties.ReadTime?.rich_text?.[0]?.plain_text || '5 min read',
      }
    })
  } catch (error) {
    console.error('Error fetching posts from Notion:', error)
    return getMockBlogPosts()
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      return getMockBlogPosts().find(post => post.slug === slug) || null
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const page: any = response.results[0]
    const properties = page.properties

    return {
      id: page.id,
      title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
      description: properties.Description?.rich_text?.[0]?.plain_text || '',
      date: properties.Date?.date?.start || new Date().toISOString(),
      slug: properties.Slug?.rich_text?.[0]?.plain_text || page.id,
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      published: properties.Published?.checkbox || false,
      readTime: properties.ReadTime?.rich_text?.[0]?.plain_text || '5 min read',
    }
  } catch (error) {
    console.error('Error fetching post from Notion:', error)
    return null
  }
}

// Mock data fallback
function getMockBlogPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: '整洁代码的艺术',
      description: '探索使代码更易读、可维护和优美的原则与实践。从命名约定到架构决策的方方面面。',
      date: '2024-12-15',
      slug: 'art-of-clean-code',
      tags: ['开发', '最佳实践', '整洁代码'],
      published: true,
      readTime: '8 分钟阅读',
    },
    {
      id: '2',
      title: '使用 Notion 构建：开发者视角',
      description: '我如何将 Notion 集成到开发工作流程中并围绕它构建工具。从构建 theBlock 项目中学到的经验教训。',
      date: '2024-12-10',
      slug: 'building-with-notion',
      tags: ['Notion', '生产力', '工具'],
      published: true,
      readTime: '12 分钟阅读',
    },
    {
      id: '3',
      title: '可扩展的设计系统',
      description: '创建随团队和产品增长的设计系统。从初始组件到全面指南的完整过程。',
      date: '2024-12-05',
      slug: 'design-systems-scale',
      tags: ['设计', '系统', 'UI/UX'],
      published: true,
      readTime: '15 分钟阅读',
    },
  ]
}
