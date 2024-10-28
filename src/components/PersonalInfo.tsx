"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PersonalInfoForm from './PersonalInfoForm';
import SelectPlan from './PersonalInfoPlan'; // Corrigido o nome da importação para o componente de planos
import AddOnsForm from './PersonalInfoAddOns'; // Importando o componente AddOnsForm
import Summary from './PersonalInfoSummary';
import ThankYou from './PersonalInfoThankYou';

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [currentStep, setCurrentStep] = useState(1); // Estado para o passo atual
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number }>({ name: 'Arcade', price: 9 }); // Estado para o plano selecionado
  const [selectedAddOns, setSelectedAddOns] = useState<{ name: string; price: number }[]>([]); // Estado para add-ons selecionados
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly'); // Estado para o tipo de faturamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlanSelect = (plan: { name: string; price: number }) => {
    setSelectedPlan(plan); // Atualiza o plano selecionado
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg grid grid-cols-7 max-w-5xl pl-3 min-h-[550px] min-w-[75%]">
      <Sidebar currentStep={currentStep} />
      <div className="col-span-5 ml-3 flex flex-col justify-between min-h-[500px]">
        {currentStep === 1 && (
          <PersonalInfoForm
            formData={formData}
            handleChange={handleChange}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 2 && (
          <SelectPlan
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setBillingType={setBillingType}
            handlePlanSelect={handlePlanSelect} // Adiciona a função de seleção de plano
          />
        )}
        {currentStep === 3 && (
          <AddOnsForm
            selectedAddOns={selectedAddOns}       // Passa o estado selectedAddOns
            setSelectedAddOns={setSelectedAddOns} // Passa a função setSelectedAddOns
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            billingType={billingType}
          />
        )}
        {currentStep === 4 && (
          <Summary
            selectedPlan={selectedPlan}
            selectedAddOns={selectedAddOns}
            billingType={billingType}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 5 && (
          <ThankYou />
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
