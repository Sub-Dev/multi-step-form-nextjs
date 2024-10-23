// src/components/PersonalInfo.tsx
"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Importando o componente Sidebar

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Defina o passo atual
  const currentStep = 1; // Aqui você pode alterar o número para o passo desejado (1 a 4)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-3 max-w-4xl">
      {/* Sidebar com os passos e imagem de fundo */}
      <Sidebar currentStep={currentStep} /> {/* Passando a propriedade currentStep */}

      {/* Formulário */}
      <div className="col-span-2 p-8 bg-white rounded-r-lg">
        <h2 className="text-3xl font-bold mb-6 text-black">Personal Info</h2>
        <p className="text-gray-400 mb-6">Please provide your name, email address, and phone number.</p>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-black">Name</label>
          <input
            className="w-full p-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-black">Email Address</label>
          <input
            className="w-full p-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-black">Phone Number</label>
          <input
            className="w-full p-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
          />
        </div>

        <button className="bg-purplish-blue text-white py-2 px-6 rounded hover:bg-light-blue transition font-semibold">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
