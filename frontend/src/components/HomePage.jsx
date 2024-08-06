// src/App.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4">
      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 rounded-full bg-[#519CF4]"></div>
        <div className="w-6 h-6 rounded-full bg-[#519CF4]"></div>
      </div>
      {/* Links Section */}
      <div className="flex space-x-6">
        <a href="#" className="text-[#519CF4] hover:underline">For Teacher</a>
        <a href="#" className="text-[#519CF4] hover:underline">For Student</a>
        <a href="#" className="text-[#519CF4] hover:underline">For Parent</a>
        <a href="#" className="text-[#519CF4] hover:underline">Other</a>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Other components or content can go here */}
    </div>
  );
};

export default App;
