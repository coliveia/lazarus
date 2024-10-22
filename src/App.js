import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import HospitalList from './components/HospitalList';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import AddPatientForm from './components/AddPatientForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NotificationPage from './components/NotificationPage';
import UserPreferences from './components/UserPreferences';
import Agenda from './components/Agenda'; // Importando o componente de Agenda
import ChatAI from './components/ChatAI'; // Importando o componente do Chat AI

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Controle de autenticação

  return (
    <>
      {/* Renderiza o Header e a Sidebar somente se o usuário estiver autenticado */}
      {isAuthenticated && (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Header />
            <Routes>
              <Route path="/hospitals" element={<HospitalList />} />
              <Route path="/hospitals/:hospitalId/patients" element={<PatientList />} />
              <Route path="/patients/:patientId" element={<PatientDetail />} />
              <Route path="/add-patient" element={<AddPatientForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/preferences" element={<UserPreferences />} />
              <Route path="/chat-ai" element={<ChatAI />} /> {/* Rota da tela de Chat AI */}
              <Route path="/agenda" element={<Agenda />} /> {/* Rota da tela de Agenda */}
            </Routes>
            <Footer />
          </div>
        </div>
      )}

      {/* Renderiza a página de login se o usuário não estiver autenticado */}
      {!isAuthenticated && (
        <Routes>
          <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
