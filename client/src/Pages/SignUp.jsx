import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={25} />;
  const checkIcon = <FaCheck color="green" size={25} />;

  const switchIcon = (condition) => {
    return condition ? checkIcon : timesIcon;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setErrorMessage("Please fill out all fields.");
    }
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (formData.password) {
      // Check Lower and Uppercase
      if (formData.password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setUCase(true);
      } else {
        setUCase(false);
      }
      // Check for numbers
      if (formData.password.match(/([0-9])/)) {
        setNum(true);
      } else {
        setNum(false);
      }
      // Check for special character
      if (formData.password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        setSChar(true);
      } else {
        setSChar(false);
      }
      // Check for PASSWORD LENGTH
      if (formData.password.length > 5) {
        setPassLength(true);
      } else {
        setPassLength(false);
      }
    }
  }, [formData.password]);

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl text-center md:text-left">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Legend's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Confirm Password" />
              <TextInput
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                onChange={handleChange}
              />
            </div>

            <div className="form-list mt-3 space-y-2 border border-indigo-500 p-4 rounded-lg">
              <div className="flex items-center">
                <span className="mr-2">{switchIcon(uCase)}</span>
                <span>Lowercase & Uppercase</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{switchIcon(num)}</span>
                <span>Number (0-9)</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{switchIcon(sChar)}</span>
                <span>Special Character (!@#$%^&*)</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{switchIcon(passLength)}</span>
                <span>At least 6 Characters</span>
              </div>
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
              className="mt-5"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
