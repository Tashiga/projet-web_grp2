import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Userlist from './pages/userlist';
import Conversation from './pages/conversation'; // Importez votre composant Conversation

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/conversation/:id" element={<Conversation />} /> {/* Ajoutez cette route */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
