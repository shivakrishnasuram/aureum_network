import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const validate = () => {
    const newErrors = {};

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post('http://localhost:5000/api/login', formData);
      toast.success('Login Successful!');
      setFormData({ id: '', password: '' });
      navigate("/dashboard");
    } catch (error) {
      toast.error('Login Failed!');
    }
  };

  return (
    <div className="min-h-screen h-screen overflow-hidden bg-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 shadow-md rounded-lg px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">Welcome Back</h2>

        {/* User ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">User ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Test login route (optional link) */}
        <div className="mb-4 text-sm text-right">
          <Link to="/dashboard/main" className="text-blue-600 hover:underline">
            Test Login
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2 rounded hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-yellow-600 hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
