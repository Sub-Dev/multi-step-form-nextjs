"use client";
import React, { useState, useEffect } from 'react';
import NextButton from './NextButton';

interface PersonalInfoFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  handleChange,
  setCurrentStep,
  currentStep,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 640);

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="p-10 bg-white rounded-xl relative flex flex-col justify-between h-[100%] w-[100%]">
      <h2 className="text-3xl font-bold mb-1 text-black">Personal Info</h2>
      <p className="text-gray-400 mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mb-6 relative">
        <label className="block text-sm mb-2 text-black">Name</label>
        <input
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue ${errors.name ? 'border-red-500' : 'border-light-gray'}`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
        />
        {errors.name && (
          <span className="text-red-500  text-[12px] font-bold absolute right-0 top-[-5px]">
            {errors.name}
          </span>
        )}
      </div>

      <div className="mb-6 relative">
        <label className="block text-sm mb-2 text-black">Email Address</label>
        <input
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue ${errors.email ? 'border-red-500' : 'border-light-gray'}`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. stephenking@lorem.com"
        />
        {errors.email && (
          <span className="text-red-500 text-[12px] font-bold absolute right-0 top-[-5px]">
            {errors.email}
          </span>
        )}
      </div>

      <div className="mb-6 relative">
        <label className="block text-sm mb-2 text-black">Phone Number</label>
        <input
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue ${errors.phone ? 'border-red-500' : 'border-light-gray'}`}
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
        />
        {errors.phone && (
          <span className="text-red-500 text-[12px] font-bold absolute right-0 top-[-5px]">
            {errors.phone}
          </span>
        )}
      </div>

      {!isMobile && (
        <div className="flex justify-end">
          <NextButton onClick={handleNext} />
        </div>
      )}

      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-end">
          <NextButton onClick={handleNext} />
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
