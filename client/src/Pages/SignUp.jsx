import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* Left Side */}
        <div className="">
        <NavLink
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Legends
        </span>
        Blog
      </NavLink>
        </div>
        {/* right Side */}
        <div className="">

        </div>
      </div>
    </div>
  )
}
