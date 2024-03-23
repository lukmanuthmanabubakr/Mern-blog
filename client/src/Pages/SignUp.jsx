import { Button, Label, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="flex-1">
          <NavLink to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Legends
            </span>
            Blog
          </NavLink>
          <p className="text-sm mt-5">
            This is a demo project, You can sign up with ur email and password
            Or with Your Google Account
          </p>
        </div>
        {/* right Side */}

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <NavLink to="/sign-in" className="text-blue-500">
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
