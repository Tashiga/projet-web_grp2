// App.js
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Userlist from './pages/userlist';
import Conversation from './pages/conversation';
import Signup from './pages/signup';
import Login from './pages/login';
import Header from './components/header';
import { AuthProvider, useAuth } from './utils/AuthContext';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {user ? (
        <>
          <Route path="/" element={<Header><Userlist /></Header>} />
          <Route path="/conversation/:id" element={<Header><Conversation /></Header>} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
