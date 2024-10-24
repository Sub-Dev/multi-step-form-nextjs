"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PersonalInfoForm from './PersonalInfoForm';
import SelectPlan from './PersonalInfoPlan'; // Corrigi o nome da importação

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [currentStep, setCurrentStep] = useState(1); // Adiciona o estado para o passo atual

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg grid grid-cols-7 max-w-5xl pl-3 min-h-[500px]"> {/* Altura mínima ajustada */}
      <Sidebar currentStep={currentStep} />
      <div className="col-span-5 ml-3 flex flex-col justify-between min-h-[500px]"> {/* Flex e altura mínima garantida */}
        {currentStep === 1 && (
          <PersonalInfoForm
            formData={formData}
            handleChange={handleChange}
            setCurrentStep={setCurrentStep} // Passa a função setCurrentStep
            currentStep={currentStep}      // Passa o passo atual
          />
        )}
        {currentStep === 2 && (
          <SelectPlan
            currentStep={currentStep} // Passa o passo atual
            setCurrentStep={setCurrentStep} // Passa a função para mudar o passo
          />
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
