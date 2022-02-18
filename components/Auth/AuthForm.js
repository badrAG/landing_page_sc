import React, { useState } from "react";
import Image from "next/image";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(true);
  
  return (
    <div className="flex bg-white items-center justify-center">
      <div className="w-full lg:w-3/4 p-6 ">
        <h1 className="text-lg font-medium tracking-tighter text-center text-gray-800 sm:text-3xl">
          {form ? "Welcome." : "Sign Up to a new world."}
        </h1>
        {form ? (
          <form  className="mt-6">
            <div>
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email "
                className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-current ring-offset-2"
                required
              />
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Your Password"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-current ring-offset-2"
                required
              />
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <div className="mt-2 text-right">
              <a
                href="#"
                className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-black focus:text-black"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center  px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-slate-900 rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-lg focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            >
                Login
            </button>
          </form>
        ) : (
          <form className="mt-6">
            <div>
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                FullName
              </label>
              <input
                type="text"
                name="fullName"
                id=""
                placeholder="full name"
                className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-current ring-offset-2"
                required
              />
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email "
                className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-current ring-offset-2"
                required
              />
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Your Password"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-current ring-offset-2"
                required
              />
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                Confirme Password
              </label>
              <input
                type="password"
                name="cf_password"
                id=""
                placeholder="Confirm Password"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-current ring-offset-2"
                required
              />
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <button
              type="submit"
              className="w-full px-4 py-3 mt-6 font-semibold flex justify-center items-center text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-lg focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            >
                SignUp
            </button>
          </form>
        )}
        {form ? (
          <p className="mt-8 text-center">
            Need an account?
            <a
              onClick={() => setForm(false)}
              className="font-semibold pl-1 cursor-pointer text-gray-800 hover:text-black"
            >
              Sign Up
            </a>
          </p>
        ) : (
          <p className="mt-8 text-center">
            already have an account?
            <a
              onClick={() => setForm(true)}
              className="font-semibold cursor-pointer pl-2 text-black hover:text-black"
            >
              Log In
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
