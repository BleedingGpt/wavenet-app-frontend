"use client"
import Inner from '@/components/layout/Inner';
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    nid: '',
    district: '',
    upazila: '',
    address: '',
    package: 'Minor - 8 mbps for Home',
    verificationCode: '',
    disclaimer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert("successfully submitted");
    setFormData({
      fullName: '',
      mobileNo: '',
      email: '',
      nid: '',
      district: '',
      upazila: '',
      address: '',
      package: 'Minor - 8 mbps for Home',
      verificationCode: '',
      disclaimer: false,
    });
  };

  return (
    <Inner>
    <div className="container mx-auto p-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-center text-xl font-bold mb-4">Customer Registration Form (Broadband Internet)</h2>
        <p className="text-center text-sm mb-4">(Fields with <span className="text-red-500">*</span> are required)</p>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Full Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your name as like NID"
            required
            />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Mobile No.<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your valid mobile number"
            required
            />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email Address<span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your valid email address"
            required
            />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">NID</label>
          <input
            type="text"
            name="nid"
            value={formData.nid}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your valid NID"
            />
          <span className="text-red-500">(Optional)</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">District<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Upazila/Thana<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="upazila"
            value={formData.upazila}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Address<span className="text-red-500">*</span></label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your valid address"
            required
            ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Package<span className="text-red-500">*</span></label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            >
            <option>Minor - 8 mbps for Home</option>
            <option>Junior - 10 mbps for Home</option>
            <option>Learner - 15 mbps for Home</option>
            <option>Basic - 20 mbps for Home</option>
            <option>Primary - 35 mbps for Home</option>
            <option>Dominant - 45 mbps for Home</option>
            <option>Confident - 60 mbps for Home</option>
            <option>Positive - 75 mbps for Home</option>
            <option>Advance - 90 mbps for Home</option>
            <option>Progressive - 120 mbps for Home</option>
            <option>Spark - 30 mbps for SME</option>
            <option>Spark Lite - 30 mbps for SME</option>
            <option>Flame Lite - 40 mbps for SME</option>
            <option>Flame - 40 mbps for SME</option>
            <option>Blaze - 50 mbps for SME</option>
            <option>Blaze Lite - 50 mbps for SME</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Verification Code<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter verification code"
            required
            />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            <input
              type="checkbox"
              name="disclaimer"
              checked={formData.disclaimer}
              onChange={handleChange}
              className="mr-2"
              required
              />
            I agree with the <a href="/terms-and-conditions" className="text-red-500">terms and conditions</a>
          </label>
        </div>

        <div className="text-right">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
    </div>
    </Inner>
  );
};

export default RegistrationForm;
