import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    personName: '',
    organization: '',
    email: '',
    phone: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const allowedDomains = ['gmail.com', 'yahoo.com', 'aureum.in'];

  const validate = () => {
    const newErrors = {};

    if (!formData.personName.trim()) newErrors.personName = 'Person name is required.';
    if (!formData.organization.trim()) newErrors.organization = 'Organization name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const domain = formData.email.split('@')[1];
      if (!domain || !allowedDomains.includes(domain)) {
        newErrors.email = 'Only @gmail.com, @yahoo.com, @aureum.in are allowed.';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post('http://localhost:5000/api/register', formData);
      toast.success('Registered Successfully!');
      setFormData({
        personName: '',
        organization: '',
        email: '',
        phone: '',
        password: ''
      });
    } catch (error) {
      toast.error('Registration Failed!');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 text-gray-900">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl border border-gray-300 overflow-hidden">

        {/* Left branding */}
        <div className="w-full md:w-1/2 px-6 py-8 space-y-4 border-r border-gray-200 bg-gray-50">
          <h2 className="text-yellow-500 font-bold text-xl">The Most Trusted & Secure For</h2>
          <p className="italic leading-relaxed text-gray-700">
            Buy, sell, trade, invest, lend, loan and do much more with Aureum digital gold asset.
            <br /><br />
            You are one step away from securing your future in gold.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-8 py-10 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">Welcome to Aureum Network</h2>
          <p className="text-sm text-gray-500 mb-2">Create an Account</p>

          {/* Company */}
          <div>
            <label className="text-sm text-gray-700">Company Name</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g. Aureum Network"
            />
            {errors.organization && <p className="text-red-500 text-sm">{errors.organization}</p>}
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-700">Full Name</label>
            <input
              type="text"
              name="personName"
              value={formData.personName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
            />
            {errors.personName && <p className="text-red-500 text-sm">{errors.personName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@aureum.in"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter 10-digit number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Minimum 6 characters"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2 rounded hover:opacity-90 transition"
          >
            NEXT
          </button>

          <p className="text-sm text-center mt-3 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-600 underline hover:text-yellow-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
