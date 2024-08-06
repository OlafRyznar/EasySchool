import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'olaf@olaf.pl' && password === '123') {
      localStorage.setItem('user', email); // Ustaw użytkownika w localStorage
      navigate('/student'); // Przekieruj na stronę student
    } else {
      setError('Invalid login credentials');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Przekieruj na stronę tworzenia konta
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#fcf6f6]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img
          className="w-48 h-28 mx-auto mb-6"
          src="https://via.placeholder.com/188x116"
          alt="Logo"
        />
        <div className="text-center text-4xl font-extrabold text-[#519bf3] font-['Bitter'] mb-6">Login</div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-xl font-medium mb-2">Login (e-mail address)</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-xl font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-[#519bf3] text-white text-2xl font-extrabold rounded-lg shadow mb-4"
        >
          Login
        </button>
        <div className="flex justify-between">
          <button
            onClick={handleCreateAccount}
            className="text-[#519bf3] text-xl font-extrabold"
          >
            Create account
          </button>
          <button className="text-[#519bf3] text-xl font-extrabold">Forgot password</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
