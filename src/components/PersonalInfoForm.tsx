"use client";
import React from 'react';

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
    <div className="p-10 bg-white rounded-r-lg relative flex flex-col justify-between h-[500px] w-[700px]"> {/* Altura fixa ajustada */}
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
        <button onClick={() => setCurrentStep(currentStep + 1)} className="bg-[#03295a] text-white py-2 px-6 rounded-lg hover:bg-light-blue transition text-base font-semibold">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
