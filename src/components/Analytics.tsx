"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import Script from "next/script"

export function Analytics() {
  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Performance monitoring script */}
      <Script id="performance-monitor" strategy="afterInteractive">
        {`
          // Core Web Vitals monitoring
          function getCLS(onPerfEntry) {
            if (onPerfEntry && onPerfEntry instanceof Function) {
              new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (!entry.hadRecentInput) {
                    onPerfEntry(entry);
                  }
                }
              }).observe({entryTypes: ['layout-shift']});
            }
          }

          function getFID(onPerfEntry) {
            if (onPerfEntry && onPerfEntry instanceof Function) {
              new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  onPerfEntry(entry);
                }
              }).observe({entryTypes: ['first-input']});
            }
          }

          function getLCP(onPerfEntry) {
            if (onPerfEntry && onPerfEntry instanceof Function) {
              new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  onPerfEntry(entry);
                }
              }).observe({entryTypes: ['largest-contentful-paint']});
            }
          }

          // Log performance metrics
          function logPerfMetric(metric) {
            console.log('Performance metric:', metric.name, metric.value);
            // Send to analytics if needed
            if (typeof gtag !== 'undefined') {
              gtag('event', metric.name, {
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                event_category: 'Web Vitals',
                event_label: metric.id,
                non_interaction: true,
              });
            }
          }

          // Initialize monitoring
          getCLS(logPerfMetric);
          getFID(logPerfMetric);
          getLCP(logPerfMetric);
        `}
      </Script>

      {/* Service Worker Registration */}
      <Script id="sw-register" strategy="afterInteractive">
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('ServiceWorker registration successful');
                }, function(err) {
                  console.log('ServiceWorker registration failed: ', err);
                });
            });
          }
        `}
      </Script>
    </>
  )
}
