// src/components/CreateAccountPage.jsx

import React from 'react';
import logo1 from '../assets/logo1.png'; // Import nowego logo

const CreateAccountPage = () => {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[#fcf6f6]"></div>
      <div className="relative w-10/12 max-w-md bg-white p-6 rounded-lg shadow-lg">
        <img
          className="w-32 h-auto mx-auto mb-6"
          src={logo1}
          alt="Logo"
        />
        <h1 className="text-[#519bf3] text-3xl font-extrabold text-center mb-6">
          Register
        </h1>

        <div className="space-y-4">
          {/* Input Fields */}
          <div>
            <label className="block text-black text-lg font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Input name"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Surname</label>
            <input
              type="text"
              placeholder="Input surname"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">E-mail address</label>
            <input
              type="email"
              placeholder="Input e-mail"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">School</label>
            <input
              type="text"
              placeholder="Input school name"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Input password"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Repeat password</label>
            <input
              type="password"
              placeholder="Input password again"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          {/* Register Button */}
          <button className="w-full h-10 bg-[#519bf3] text-white text-lg font-bold rounded-lg shadow-md hover:bg-[#4179d6]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
