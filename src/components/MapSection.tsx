export function MapSection() {
  return (
    <section className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Map Image */}
      <div className="relative h-48 bg-gray-100">
        <div className="grid grid-cols-2 h-full">
          <img
            src="https://ext.same-assets.com/3145676326/3850569026.png"
            alt="Map tile 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://ext.same-assets.com/3145676326/3516010138.png"
            alt="Map tile 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Location Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg" />
        </div>
      </div>

      {/* Map Info */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between text-sm text-[#999a9b]">
          <span>
            <a href="https://pigeon-maps.js.org/" className="hover:text-[#9a6a48] transition-colors">Pigeon</a>
            {" | "}
            <a href="https://www.openstreetmap.org/copyright" className="hover:text-[#9a6a48] transition-colors">OpenStreetMap</a>
            {" contributors"}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-[#494b4f]">Hebei, China</h3>
          <p className="text-[#999a9b] text-sm">39.624°N / 118.178°E</p>
        </div>
      </div>
    </section>
  )
}
