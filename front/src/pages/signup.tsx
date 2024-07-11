import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_MUTATION } from '../graphql/mutations';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [createUser] = useMutation(SIGNUP_MUTATION);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await createUser({ variables: { username, password } });
      alert(`User created: ${data.createUser.username}`);
      navigate('/login');
    } catch (error) {
        if (error instanceof Error) {
          alert(`Error creating user: ${error.message}`);
        } else {
          alert(`Error creating user: ${String(error)}`);
        }
      }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="p-2 rounded-md border border-gray-300" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-2 rounded-md border border-gray-300" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Signup</button>
        <a href="/login" className="text-blue-500">Login here !</a>
      </form>
    </div>
  );
};

export default Signup;
