import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import HospitalList from './components/HospitalList';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import AddPatientForm from './components/AddPatientForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NotificationPage from './components/NotificationPage';
import UserPreferences from './components/UserPreferences';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hospitals" element={<HospitalList />} />
        <Route path="/hospitals/:hospitalId/patients" element={<PatientList />} />
        <Route path="/patients/:patientId" element={<PatientDetail />} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/preferences" element={<UserPreferences />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
