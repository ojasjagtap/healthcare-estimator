import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from './components/LandPage';
import PatientInfo from './components/PatientInfo';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
