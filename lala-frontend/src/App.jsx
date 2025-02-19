import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import { LoginForm, RenterDashboard, Footer, BookingForm } from './components/Components';
import { HostDashboard } from './components/HostDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import PropertyDetails from './components/PropertyDetails';
import SignupForm from './components/SignupForm';
import UserProfile from './components/UserProfile';

// Auth Context
export const AuthContext = React.createContext(null);

const App = () => {
  // State for user authentication
  const [user, setUser] = useState(null);
  
  // Simple auth state check
  const isAuthenticated = () => !!user;

  // Protected Route Component
  const ProtectedRoute = ({ children, requiredRole }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && user.role !== requiredRole) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              
              {/* 404 Route */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-gray-600 mb-4">Page not found</p>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                      Go Home
                    </button>
                  </div>
                </div>
              } />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;