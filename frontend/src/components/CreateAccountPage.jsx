import React from 'react';

const CreateAccountPage = () => {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[#fcf6f6]"></div>
      <div className="relative w-11/12 max-w-[600px] bg-white p-8 rounded-lg shadow-lg">
        <img
          className="w-40 h-28 mx-auto mb-8"
          src="https://via.placeholder.com/250x175"
          alt="Logo"
        />
        <h1 className="text-[#519bf3] text-4xl font-extrabold text-center mb-8">
          Register
        </h1>

        <div className="space-y-6">
          {/* Input Fields */}
          <div>
            <label className="block text-black text-xl font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Input name"
              className="w-full h-12 bg-white border border-[#aeadad] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black text-xl font-medium mb-2">Surname</label>
            <input
              type="text"
              placeholder="Input surname"
              className="w-full h-12 bg-white border border-[#aeadad] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black text-xl font-medium mb-2">E-mail address</label>
            <input
              type="email"
              placeholder="Input e-mail"
              className="w-full h-12 bg-white border border-[#aeadad] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black text-xl font-medium mb-2">School</label>
            <input
              type="text"
              placeholder="Input school name"
              className="w-full h-12 bg-white border border-[#aeadad] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black text-xl font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Input password"
              className="w-full h-12 bg-white border border-[#aeadad] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block text-black text-xl font-medium mb-2">Repeat password</label>
            <input
              type="password"
              placeholder="Input password again"
              className="w-full h-12 bg-white border border-[#aeadad] rounded-lg px-4"
            />
          </div>

          {/* Register Button */}
          <button className="w-full h-12 bg-[#519bf3] text-white text-xl font-bold rounded-lg shadow-md hover:bg-[#4179d6]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
