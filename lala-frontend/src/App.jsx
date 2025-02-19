import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PropertyPage from "./pages/PropertyPage";
import ContactPage from "./pages/ContactPage";
import HostsPage from "./pages/HostsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import "./index.css";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OTPPage from "./pages/OTPPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hosts" element={<HostsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OTPPage />} />
      </Routes>
    </Router>
  );
}

export default App;
