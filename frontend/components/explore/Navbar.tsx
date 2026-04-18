export default function Navbar() {
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#208779] text-white flex items-center justify-center font-bold text-sm">
        H
      </div>
      <span className="font-bold text-gray-900 text-sm">HelpHub AI</span>
    </div>
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
      <a href="#" className="hover:text-gray-900 transition">Dashboard</a>
      <a href="#" className="bg-[#EAF5F3] text-[#208779] px-4 py-2 rounded-full">Explore</a>
      <a href="#" className="hover:text-gray-900 transition">Leaderboard</a>
      <a href="#" className="hover:text-gray-900 transition">Notifications</a>
    </div>
  </nav>
}