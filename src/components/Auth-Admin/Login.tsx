import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add validation logic here if needed

    // Simulating the login action
    console.log("Logging in...", formData);

    // Redirect to the admin page on successful login
    router.push("/admin");
  };

  return (
    <div className="px-24 py-16">
      <div className="bg-white py-8 px-20">
        <div className="py-6 flex flex-col">
          <span className="text-[#0D60D8] text-center font-outfit font-bold text-3xl md:text-4xl">Admin Login</span>
          <form onSubmit={login} className="flex flex-col px-40 mt-6 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                Email
              </label>
              <input
                type="text"
                required
                name="email"
                value={email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="
                  py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                  placeholder-gray-200::placeholder placeholder-opacity-75
                  border focus:border-[#0D60D8]
                  "
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="text-[#19202C] text-2xl mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={open === false ? "password" : "text"}
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="
                    py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                    placeholder-gray-200::placeholder placeholder-opacity-75
                    border focus:border-[#0D60D8]
                    "
                  placeholder="Enter your password"
                />
                <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                  {open === false ? <Eye name="eye" onClick={toggle} size={20} /> : <EyeOff name="eye-off" onClick={toggle} size={20} />}
                </div>
              </div>
            </div>

            <Link href="/forgotPassword" className="text-[#0D60D8] font-normal text-base">
              Forgot Password?
            </Link>

            <button
              type="submit"
              className="
                lg:w-full bg-[#0D60D8] py-4  text-white rounded-md
                font-bold text-base  focus:outline-none w-full mt-6
                "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
