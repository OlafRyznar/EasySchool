import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import universitiesData from '../assets/universities.json';
import VerificationCodeModal from '../components/VerificationCodeModal';

const CreateAccountPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [universities, setUniversities] = useState([]);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [role, setRole] = useState('Student'); // State for user role
  const navigate = useNavigate();

  useEffect(() => {
    setUniversities(universitiesData);
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const domain = value.split('@')[1];
    if (domain) {
      const matchedUniversity = universities.find(university =>
        university.domains.some(universityDomain => domain.endsWith(universityDomain))
      );
      setSchoolName(matchedUniversity ? matchedUniversity.name : '');
    } else {
      setSchoolName('');
    }
  };

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationEmail = () => {
    const code = generateVerificationCode();
    setVerificationCode(code);

    const templateParams = {
      to_email: email,
      to_name: name,
      from_name: 'EasySchool',
      message: `Your verification code is: ${code}`,
    };

    emailjs.send('service_611rrvm', 'template_bi8cxat', templateParams, '1tVne34xNoKV8AhUr')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setIsCodeSent(true);
        setIsModalVisible(true);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('An error occurred while sending the email.');
      });
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsCodeSent(false);
  };

  const handleModalSubmit = () => {
    setIsModalVisible(false);
    handleRegister();
  };

  const handleRegister = () => {
    if (!name || !surname || !email || !password || !repeatPassword || !role) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!schoolName) {
      setError('Please enter a valid school email address.');
      return;
    }

    setError('');
    navigate('/');
  };

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[#fcf6f6]"></div>
      <div className="relative w-10/12 max-w-md bg-white p-6 rounded-lg shadow-lg">
        <img
          className="w-32 h-auto mx-auto mb-6"
          src={logo1}
          alt="Logo"
        />
        <h1 className="text-[#519bf3] text-3xl font-extrabold text-center mb-2">
          Register
        </h1>

        <div className="space-y-3">
          <div>
            <label className="block text-black text-lg font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Input name"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Surname</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Input surname"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">School domain e-mail address</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Input e-mail"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">School</label>
            <input
              type="text"
              value={schoolName}
              readOnly
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Input password"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Repeat password</label>
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Input password again"
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-1">Register as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-10 bg-white border border-[#aeadad] rounded-lg px-3"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Guardian">Guardian</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          {!isCodeSent ? (
            <button
              onClick={sendVerificationEmail}
              className="w-full h-10 bg-[#519bf3] text-white text-lg font-bold rounded-lg shadow-md hover:bg-[#4179d6]"
            >
              Send Verification Code
            </button>
          ) : (
            <button
              onClick={() => setIsModalVisible(true)}
              className="w-full h-10 bg-[#519bf3] text-white text-lg font-bold rounded-lg shadow-md hover:bg-[#4179d6]"
            >
              Verify Code
            </button>
          )}
        </div>

        {/* Modal for verification code */}
        <VerificationCodeModal
          isVisible={isModalVisible}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          verificationCode={verificationCode}
        />
      </div>
    </div>
  );
};

export default CreateAccountPage;
