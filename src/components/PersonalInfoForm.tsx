"use client";
import React from 'react';
import NextButton from './NextButton';
interface PersonalInfoFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCurrentStep: (step: number) => void; // Adiciona setCurrentStep como prop
  currentStep: number; // Passa o passo atual como prop
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  handleChange,
  setCurrentStep,
  currentStep,
}) => {
  return (
    <div className="p-10 bg-white rounded-r-lg relative flex flex-col justify-between h-[100%] w-[100%]"> {/* Altura fixa ajustada */}
      <h2 className="text-3xl font-bold mb-1 text-black">Personal Info</h2>
      <p className="text-gray-400 mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <div className="mb-6">
        <label className="block text-sm mb-2 text-black">Name</label>
        <input
          className="w-full p-2 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm mb-2 text-black">Email Address</label>
        <input
          className="w-full p-2 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm mb-2 text-black">Phone Number</label>
        <input
          className="w-full p-2 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <div className="flex justify-end">
        <NextButton onClick={() => setCurrentStep(currentStep + 1)} />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
