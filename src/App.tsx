import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { TodoProvider } from './components/todo-context/TodoContext';
import { AppContent } from './components/app-content/AppContent';
import Login from './components/login/Login';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <TodoProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<AppContent />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </TodoProvider>
  );
}

export default App;
