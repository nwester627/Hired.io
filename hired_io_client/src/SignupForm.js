import React, { useState } from "react";
import { UserPlus } from "phosphor-react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl signup-form-container p-6 sm:p-12 md:p-16 min-h-[32rem] flex flex-col justify-start">
      {/* Title */}
      <h2 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
        <span className="text-black">Sign</span>
        <span className="bg-gradient-to-r from-[#CD4236] to-[#FFB86B] bg-clip-text text-transparent ml-2">
          Up
        </span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 sm:space-y-8 flex flex-col gap-6 sm:gap-8 m-auto"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-8 sm:px-12 py-3 sm:py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg sm:text-xl md:text-2xl"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-8 sm:px-12 py-3 sm:py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg sm:text-xl md:text-2xl"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full px-8 sm:px-12 py-3 sm:py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg sm:text-xl md:text-2xl"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-xl hover:bg-blue-700 transition text-lg sm:text-xl md:text-2xl font-bold tracking-wide shadow-md flex items-center justify-center gap-3"
        >
          <UserPlus size={28} weight="duotone" className="text-white -ml-1" />
          <span>Create Account</span>
        </button>
      </form>
    </div>
  );
}
