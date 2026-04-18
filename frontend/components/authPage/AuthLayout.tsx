"use client"
export default function AuthLayout(){
    return(
        <main className="flex-1 flex items-center justify-center p-6 relative z-10">
      <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Card - Information */}
        <div className="bg-[#162B28] rounded-[2rem] p-10 lg:p-12 text-white flex flex-col justify-center shadow-xl">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
            Community Access
          </p>
          <h1 className="text-4xl lg:text-[2.75rem] leading-tight font-bold mb-6">
            Enter the support<br />network.
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Choose a demo identity, set your role, and jump into a multi-page product flow designed for asking, offering, and tracking help with a premium interface.
          </p>
          
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>Role-based entry for Need Help, Can Help, or Both</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>Direct path into dashboard, requests, AI Center, and community feed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>Persistent demo session powered by LocalStorage</span>
            </li>
          </ul>
        </div>

        {/* Right Card - Form */}
        <div className="bg-[#FCFAF5] rounded-[2rem] p-10 lg:p-12 shadow-md flex flex-col justify-center">
          <p className="text-[#208779] text-xs font-bold tracking-widest uppercase mb-4">
            Login / Signup
          </p>
          <h2 className="text-3xl lg:text-[2rem] font-bold text-gray-900 leading-tight mb-8">
            Authenticate your<br />community profile
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Select Demo User */}
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Select demo user
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-[#208779] focus:ring-1 focus:ring-[#208779] transition">
                  <option>Ayesha Khan</option>
                  <option>Sara Noor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Role selection
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-[#208779] focus:ring-1 focus:ring-[#208779] transition">
                  <option>Both</option>
                  <option>Need Help</option>
                  <option>Can Help</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Email & Password Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  defaultValue="community@helphub.ai"
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-[#208779] focus:ring-1 focus:ring-[#208779] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  defaultValue="12345678"
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-[#208779] focus:ring-1 focus:ring-[#208779] transition tracking-widest"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#1AA08B] text-white font-bold text-sm py-4 rounded-xl hover:bg-[#158775] transition-colors shadow-sm"
              >
                Continue to dashboard
              </button>
            </div>
          </form>

        </div>
      </div>
    </main>
    )
}