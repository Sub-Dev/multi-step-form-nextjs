"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PersonalInfoForm from './PersonalInfoForm';
import SelectPlan from './PersonalInfoPlan'; // Corrigido o nome da importação para o componente de planos
import AddOnsForm from './PersonalInfoAddOns'; // Importando o componente AddOnsForm

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [currentStep, setCurrentStep] = useState(1); // Adiciona o estado para o passo atual
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]); // Adiciona o estado para add-ons
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly'); // Adiciona o estado para o tipo de faturamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg grid grid-cols-7 max-w-5xl pl-3 min-h-[550px] min-w-[75%]"> {/* Altura mínima ajustada */}
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
            setBillingType={setBillingType} // Passa a função para definir o tipo de faturamento
          />
        )}
        {currentStep === 3 && (
          <AddOnsForm
            selectedAddOns={selectedAddOns}       // Passa o estado selectedAddOns
            setSelectedAddOns={setSelectedAddOns} // Passa a função setSelectedAddOns
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            billingType={billingType} // Passa o estado billingType
          />
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
