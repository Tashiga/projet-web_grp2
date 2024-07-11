// Login.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { useAuth } from '../utils/AuthContext';

const Login: React.FC = () => {
  const { setUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { username, password } });
      alert(`Logged in as: ${data.loginUser.username}`);
      setUser(data.loginUser);
      localStorage.setItem('user', JSON.stringify(data.loginUser));  // Enregistrez l'utilisateur dans localStorage
      navigate('/');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="p-2 rounded-md border border-gray-300" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-2 rounded-md border border-gray-300" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Login</button>
        <a href="/signup" className="text-blue-500">Signup here!</a>
      </form>
    </div>
  );
};

export default Login;
