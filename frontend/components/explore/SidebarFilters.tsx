export default function SidebarFilters() {
    <aside className="bg-[#FBF9F4] rounded-[2.5rem] p-10 shadow-sm border border-gray-100/50">
    <p className="text-[#208779] text-xs font-bold tracking-widest uppercase mb-2">Filters</p>
    <h2 className="text-4xl font-bold text-gray-900 mb-10">Refine the feed</h2>
    
    <div className="space-y-8">
      {[
        { label: "Category", type: "select", placeholder: "All categories" },
        { label: "Urgency", type: "select", placeholder: "All urgency levels" },
        { label: "Skills", type: "input", placeholder: "React, Figma, Git/GitHub" },
        { label: "Location", type: "input", placeholder: "Karachi, Lahore, Remote" },
      ].map((filter) => (
        <div key={filter.label}>
          <label className="block text-sm font-bold text-gray-700 mb-3">{filter.label}</label>
          {filter.type === "select" ? (
            <select className="w-full bg-white border border-gray-100 text-gray-500 text-sm rounded-2xl px-5 py-4 outline-none shadow-sm appearance-none">
              <option>{filter.placeholder}</option>
            </select>
          ) : (
            <input 
              type="text" 
              placeholder={filter.placeholder}
              className="w-full bg-white border border-gray-100 text-gray-500 text-sm rounded-2xl px-5 py-4 outline-none shadow-sm"
            />
          )}
        </div>
      ))}
    </div>
  </aside>
}