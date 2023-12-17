import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Eye, EyeOff, MoveLeft } from "lucide-react";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [isLoading, setIsLoading] = useState(false);

  const login = (e: FormEvent) => {
    e.preventDefault();

    // Simulate loading
    setIsLoading(true);

    // Simulate success
    setTimeout(() => {
      setIsLoading(false);

      // Simulate navigation after successful login
      router.push("/admin");
    }, 2000);
  };

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col items-center h-screen lg:justify-center w-full md:px-20 flex-1 md:py-20">
      <div className="bg-white rounded-lg flex lg:max-w-4xl w-full max-w-full">
        <div className=" w-full px-5 md:px-8 py-8 md:py-20">
          <div className="flex justify-start pb-20 items-center gap-6">
            <Link href="/">
              <MoveLeft />
            </Link>
            <span className="text-[#676869]">Back</span>
          </div>
          <h1 className="text-[#19202C] font-bold text-6xl">
            Sign in to <span className="text-[#0D60D8]"> Rise High Hotel</span>
          </h1>
          <p className="mt-4 text-[#676869] font-normal text-lg">Enter your login details below.</p>

          <form onSubmit={login} className="flex flex-col gap-4">
            <div className="flex flex-col mt-12">
              <label htmlFor="email" className="text-[#19202C] text-lg mb-2">
                Email or Phone
              </label>
              <input
                type="text"
                id="email"
                required={!email.includes("@") && !email.match(/^\d+$/)}
                name="email"
                value={email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8]"
                placeholder="Enter your email or phone number"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="text-[#19202C] text-lg mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={open === false ? "password" : "text"}
                  id="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                    placeholder-gray-200::placeholder placeholder-opacity-75
                    border focus:border-[#0D60D8]"
                  placeholder="Enter your password"
                />
                <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                  {open === false ? <Eye name="eye" onClick={toggle} size={20} /> : <EyeOff name="eye-off" onClick={toggle} size={20} />}
                </div>
              </div>
            </div>

            <Link href="/auth/forgotPassword" className="text-black font-normal text-base md:text-lg">
              Forgot Password?
            </Link>

            <button
              type="submit"
              disabled={isLoading}
              className="lg:w-full bg-[#0D60D8] py-4 text-white rounded-md
              font-bold text-lg focus:outline-none w-full mt-6"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
