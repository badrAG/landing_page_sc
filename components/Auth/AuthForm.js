import React, { useState } from "react";
import Image from "next/image";

const AuthForm = () => {
  
  return (
    <div className="flex bg-white items-center justify-center">
      <div className="w-full lg:w-1/2 p-6 ">
       
          <form className="mt-6">
            <div>
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id=""
                placeholder="full name"
                className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-primary-default ring-offset-2"
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
                className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-primary-default ring-offset-2"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                 Number Phone
              </label>
              <input
                type="tel"
                name="phone"
                id=""
                placeholder="number phone"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-primary-default ring-offset-2"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
              ADRESSE
              </label>
              <input
                type="text"
                name="address"
                id=""
                placeholder="Adresse"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-primary-default ring-offset-2"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                SECTEUR D'ACTIVITÉ
              </label>
              <input
                type="text"
                name="SECTEUR D'ACTIVITÉ"
                id=""
                placeholder="SECTEUR D'ACTIVITÉ"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-primary-default ring-offset-2"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                BUDGET 
              </label>
              <input
                type=""
                name="BUDGET"
                id=""
                placeholder="BUDGET"
                className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg text-black focus:border-gray-500 focus:outline-none focus:shadow-lg focus:ring-2 ring-offset-primary-default ring-offset-2"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
              AVEZ-VOUS DÉJÀ IMPORTER DEPUIS LA CHINE OU AUTRES PAYS ? 
              </label>
              <div className="flex space-x-2">
              <div className="flex items-center space-x-2">
                <label htmlFor="Oui">Oui</label>
              <input
                type="radio"
                className="accent-primary-default"
                name="q1"
                id="Oui"
              />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="Non">Non</label>
              <input
                type="radio"
                name="q1"
                className="accent-primary-default"
                id="Non"
              />
              </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
              AVEZ-VOUS UNE SOCIÉTÉ AU MAROC ?
              </label>
              <div className="flex space-x-2">
              <div className="flex items-center space-x-2">
                <label htmlFor="Oui">Oui</label>
              <input
                type="radio"
                name="q1"
                className="accent-primary-default"
                id="Oui"
              />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="Non">Non</label>
              <input
                type="radio"
                name="q1"
                className="accent-primary-default"
                id="Non"
              />
              </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
              AVEZ-VOUS UNE EXPÉRIENCE DE COMMERCE OFFLINE ?
              </label>
              <div className="flex space-x-2">
              <div className="flex items-center space-x-2">
                <label htmlFor="Oui">Oui</label>
              <input
                type="radio"
                name="q1"
                className="accent-primary-default"
                id="Oui"
              />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="Non">Non</label>
              <input
                type="radio"
                name="q1"
                className="accent-primary-default"
                id="Non"
              />
              </div>
              </div>
            </div>
            <span className="text-secondary-default text-sm font-normal">
            </span>
            <button
              type="submit"
              className="w-full px-4 py-3 mt-6 font-semibold flex justify-center items-center text-white transition duration-500 ease-in-out transform bg-primary-default rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-lg focus:outline-none focus:ring-2 ring-offset-primary-default ring-offset-2"
            >
                SignUp
            </button>
          </form>
        {/* {form ? (
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
        )} */}
      </div>
    </div>
  );
};

export default AuthForm;
