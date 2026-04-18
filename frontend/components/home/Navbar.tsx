export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#208779] text-white flex items-center justify-center font-bold text-sm">
        H
      </div>
      <span className="font-semibold text-gray-900 text-sm">HelpHub AI</span>
    </div>

    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
      <a href="#" className="bg-teal-50/50 text-[#208779] px-4 py-2 rounded-full">Home</a>
      <a href="#" className="hover:text-gray-900">Explore</a>
      <a href="#" className="hover:text-gray-900">Leaderboard</a>
      <a href="#" className="hover:text-gray-900">AI Center</a>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-500 hidden sm:block">Live community signals</span>
      <button className="bg-[#208779] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a6e62] transition">
        Join the platform
      </button>
    </div>
  </nav>
  );
}