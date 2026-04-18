export default function FeaturedRequest() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-12">
    <p className="text-[#208779] text-xs font-bold tracking-wider uppercase mb-3">Featured Requests</p>
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900">Community problems currently in motion</h2>
      <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md transition text-sm">
        View full feed
      </button>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      {/* Request Card 1 */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="bg-[#EAF5F3] text-[#208779] text-[10px] font-bold px-3 py-1 rounded-full">Web Development</span>
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full">High</span>
            <span className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full">Solved</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Need help</h3>
          <p className="text-sm text-gray-600 mb-6">helpn needed</p>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4">
          <div>
            <p className="text-sm font-bold text-gray-900">Ayesha Khan</p>
            <p className="text-xs text-gray-500 mt-1">Karachi • 1 helper interested</p>
          </div>
          <button className="bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-gray-900 hover:bg-gray-50 transition">
            Open details
          </button>
        </div>
      </div>

      {/* Request Card 2 */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="bg-[#EAF5F3] text-[#208779] text-[10px] font-bold px-3 py-1 rounded-full">Web Development</span>
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full">High</span>
            <span className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full">Solved</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Need help making my portfolio responsive before demo day</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.</p>
          <div className="flex gap-2 mb-6 flex-wrap">
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">HTML/CSS</span>
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">Responsive</span>
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">Portfolio</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4">
          <div>
            <p className="text-sm font-bold text-gray-900">Sara Noor</p>
            <p className="text-xs text-gray-500 mt-1">Karachi • 1 helper interested</p>
          </div>
          <button className="bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-gray-900 hover:bg-gray-50 transition">
            Open details
          </button>
        </div>
      </div>

      {/* Request Card 3 */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="bg-[#EAF5F3] text-[#208779] text-[10px] font-bold px-3 py-1 rounded-full">Design</span>
            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full">Medium</span>
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full">Open</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Looking for Figma feedback on a volunteer event poster</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.</p>
          <div className="flex gap-2 mb-6 flex-wrap">
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">Figma</span>
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">Poster</span>
            <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">Design Review</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4">
          <div>
            <p className="text-sm font-bold text-gray-900">Ayesha Khan</p>
            <p className="text-xs text-gray-500 mt-1">Lahore • 1 helper interested</p>
          </div>
          <button className="bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-gray-900 hover:bg-gray-50 transition">
            Open details
          </button>
        </div>
      </div>
    </div>
  </section>
    )
}