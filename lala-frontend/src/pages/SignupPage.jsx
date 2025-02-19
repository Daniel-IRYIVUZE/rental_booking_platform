import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, User, Building2, Mail, Lock, Phone, Globe, 
  MapPin, FileText, Camera, ChevronRight, ChevronLeft
} from 'lucide-react';

const SignupPage = () => {
  const [role, setRole] = useState('renter');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    idNumber: '',
    nationality: '',
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const roleButtonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
              placeholder="Full Name"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
              placeholder="Password"
            />
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {role === 'host' && (
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="propertyType"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
              placeholder="Property Type"
            />
          </div>
        )}

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
            placeholder="Phone Number"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
            placeholder="Location"
          />
        </div>

        <div className="relative">
          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
            placeholder="ID/Passport Number"
          />
        </div>

        <div className="relative">
          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900"
            placeholder="Nationality"
          />
        </div>

        <div className="relative">
          <label className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
            <Camera className="text-gray-400" />
            <span className="text-gray-600">Upload Profile Picture</span>
            <input type="file" className="hidden" accept="image/*" onChange={(e) => setFormData(prev => ({ ...prev, profileImage: e.target.files[0] }))} />
          </label>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl"
      >
        <div className="bg-gradient-to-br from-blue-900 to-indigo-600 text-white p-10 flex flex-col justify-center items-center md:w-1/2">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-4"
          >
            Welcome to Lala Rentals
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-8 text-center"
          >
            {role === 'renter' ? 'Find your perfect home' : 'List your property'}
          </motion.p>
          <div className="flex gap-4">
            <motion.button
              variants={roleButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setRole('renter')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                role === 'renter' 
                  ? 'bg-white text-blue-900 shadow-lg' 
                  : 'bg-blue-500 text-white hover:bg-blue-400'
              }`}
            >
              Renter
            </motion.button>
            <motion.button
              variants={roleButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setRole('host')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                role === 'host' 
                  ? 'bg-white text-blue-900 shadow-lg' 
                  : 'bg-blue-500 text-white hover:bg-blue-400'
              }`}
            >
              Host
            </motion.button>
          </div>
        </div>

        <div className="p-10 md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-6"
          >
            Create Your Account
          </motion.h2>

          <form className="space-y-6">
            {renderStepContent()}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
                >
                  <ChevronLeft size={20} />
                  Back
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => step === 1 ? setStep(2) : console.log('Submit', formData)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  step === 1 
                    ? 'bg-blue-900 text-white hover:bg-blue-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {step === 1 ? (
                  <>
                    Next
                    <ChevronRight size={20} />
                  </>
                ) : 'Complete Signup'}
              </motion.button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative flex items-center justify-center">
              <div className="border-t w-full border-gray-300"></div>
              <span className="bg-white px-4 text-sm text-gray-500">or</span>
              <div className="border-t w-full border-gray-300"></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full flex items-center justify-center gap-2 border py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img src="/api/placeholder/24/24" alt="Google" className="w-6 h-6" />
              Sign up with Google
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;