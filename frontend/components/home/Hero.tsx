export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Column */}
    <div className="space-y-8">
      <div>
        <p className="text-[#208779] text-xs font-bold tracking-wider uppercase mb-4">
          Smit Grand Coding Night 2026
        </p>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Find help faster.<br />
          Become help that<br />
          matters.
        </h1>
        <p className="text-gray-600 max-w-md leading-relaxed">
          HelpHub AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="bg-[#208779] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a6e62] transition">
          Open product demo
        </button>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition">
          Post a request
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {[
          { label: 'MEMBERS', value: '384+', desc: 'Students, mentors, and helpers in the loop.' },
          { label: 'REQUESTS', value: '72+', desc: 'Support posts shared across learning journeys.' },
          { label: 'SOLVED', value: '69+', desc: 'Problems resolved through fast community action.' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm">
            <p className="text-[10px] font-bold tracking-wider text-[#208779] uppercase mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column - Dark Card */}
    <div className="bg-[#1B2F2C] rounded-[2rem] p-10 relative overflow-hidden text-white shadow-xl">
      {/* Decorative Yellow Circle */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E8B94D] rounded-full blur-[2px]"></div>
      
      <p className="text-gray-300 text-xs font-bold tracking-wider uppercase mb-6 relative z-10">
        Live Product Feel
      </p>
      <h2 className="text-4xl font-bold leading-tight mb-4 relative z-10">
        More than a form.<br />
        More like an<br />
        ecosystem.
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">
        A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, notifications, and leaderboard momentum built directly in HTML, CSS, JavaScript, and LocalStorage.
      </p>

      {/* Inner Feature Cards */}
      <div className="space-y-3 relative z-10">
        <div className="bg-[#F8F9FA] text-gray-900 p-5 rounded-2xl">
          <h3 className="font-bold text-sm mb-1">AI request intelligence</h3>
          <p className="text-xs text-gray-600">Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.</p>
        </div>
        <div className="bg-[#F8F9FA] text-gray-900 p-5 rounded-2xl">
          <h3 className="font-bold text-sm mb-1">Community trust graph</h3>
          <p className="text-xs text-gray-600">Badges, helper rankings, trust score boosts, and visible contribution history.</p>
        </div>
        <div className="bg-[#F8F9FA] text-gray-900 p-5 rounded-2xl">
          <h3 className="font-bold text-sm mb-1">100%</h3>
          <p className="text-xs text-gray-600">Top trust score currently active across the sample mentor network.</p>
        </div>
      </div>
    </div>
  </section>

    )
}