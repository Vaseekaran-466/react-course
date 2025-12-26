const Login = () => {
  return (
    <>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="bg-gray-900/90 backdrop-blur-xl text-white w-100 rounded-2xl shadow-2xl p-6">

          {/* logo */}
          <div className="text-2xl text-center font-semibold tracking-wide">
            LOGO
          </div>

          {/* brand name */}
          <div className="text-center mt-6">
            <h1 className="text-3xl font-extrabold tracking-wide">EduMatrix</h1>
            <p className="text-sm text-gray-400 mt-1">
              Learning Management System
            </p>
          </div>

          {/* login role */}
          <label className="block mt-6 mb-2 text-sm font-semibold text-gray-300">
            Select Role
          </label>

          <div className="flex justify-between gap-3 role-card">
            <div className="flex-1 text-center py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00ff9d] cursor-pointer transition">
              <p className="font-medium">Student</p>
            </div>

            <div className="flex-1 text-center py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00ff9d] cursor-pointer transition">
              <p className="font-medium">Teacher</p>
            </div>

            <div className="flex-1 text-center py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00ff9d] cursor-pointer transition">
              <p className="font-medium">Admin</p>
            </div>
          </div>

          {/* login details */}
          <form className="flex flex-col gap-4 mt-6">

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/60 transition"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/60 transition"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#00ff9d]" />
                Remember me
              </label>
              <a href="#" className="hover:text-[#00ff9d] transition">
                Forgot password?
              </a>
            </div>

            <input
              className="mt-4 py-3 rounded-xl bg-gradient-to-r from-[#00ff9d] to-[#00c9ff] text-black font-bold hover:scale-[1.02] transition cursor-pointer"
              type="submit"
              value="Login to EduMatrix"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
