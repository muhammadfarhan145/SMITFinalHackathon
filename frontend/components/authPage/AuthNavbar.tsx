import Link from "next/link"
export default function AuthNavbar() {
    return(
        <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full relative z-10">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#208779] text-white flex items-center justify-center font-bold text-sm">
        H
      </div>
      <span className="font-bold text-gray-900 text-sm">HelpHub AI</span>
    </div>

    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
      <Link href="/" className="hover:text-gray-900 transition">Home</Link>
      <Link href="explore" className="hover:text-gray-900 transition">Explore</Link>
      <Link href="#" className="hover:text-gray-900 transition">Leaderboard</Link>
    </div>
  </nav>
    )
}