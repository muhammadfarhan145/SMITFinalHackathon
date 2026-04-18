export default function CoreFlow() {
    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
    <p className="text-[#208779] text-xs font-bold tracking-wider uppercase mb-3">Core Flow</p>
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900">From struggling alone to solving together</h2>
      <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md transition text-sm">
        Try onboarding AI
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: 'Ask for help clearly', desc: 'Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.' },
        { title: 'Discover the right people', desc: 'Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.' },
        { title: 'Track real contribution', desc: 'Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.' }
      ].map((card, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3">{card.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  </section>
    )
}