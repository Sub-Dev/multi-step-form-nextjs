// src/components/SelectPlan.tsx
"use client";
import React, { useState } from 'react';
import NextButton from './NextButton';
import GoBackButton from './GoBackButton';

interface SelectPlanProps {
  currentStep: number; // Recebe o passo atual
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>; // Função para atualizar o passo atual
  setBillingType: React.Dispatch<React.SetStateAction<'monthly' | 'yearly'>>; // Função para atualizar o tipo de faturamento
}

const SelectPlan: React.FC<SelectPlanProps> = ({ currentStep, setCurrentStep, setBillingType }) => {
  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    { name: 'Arcade', price: 9, icon: 'images/icon-arcade.svg' },
    { name: 'Advanced', price: 12, icon: 'images/icon-advanced.svg' },
    { name: 'Pro', price: 15, icon: 'images/icon-pro.svg' },
  ];

  const toggleBilling = () => {
    setIsMonthly(!isMonthly);
  };

  const handleNext = () => {
    // Define o tipo de faturamento antes de mudar o passo
    setBillingType(isMonthly ? 'monthly' : 'yearly');
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="p-10 bg-white rounded-r-lg relative flex flex-col justify-between h-[100%] w-[100%]">
      <div>
        <h2 className="text-3xl font-bold mb-1 text-black">Select your plan</h2>
        <p className="text-cool-gray mb-6">You have the option of monthly or yearly billing.</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === plan.name ? 'bg-[#f8f8fb] border-[#706aa8]' : 'border-light-gray'}`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <img src={plan.icon} alt={`${plan.name} icon`} className="w-8 h-8 mb-10" />
              <h3 className={`font-bold ${selectedPlan === plan.name ? 'text-[#032855]' : 'text-black'}`}>{plan.name}</h3>
              <p className={`text-cool-gray ${selectedPlan === plan.name ? 'text-[#032855]' : ''}`}>
                ${isMonthly ? plan.price : plan.price * 10}/mo
              </p>
              {/* Exibe a mensagem "2 months free" se o plano for anual */}
              {!isMonthly && (
                <p className="text-[#032855] text-sm mt-2">2 months free</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mb-8 bg-[#f8f9fe] p-3 rounded-lg">
        <span className={`mr-4 ${isMonthly ? 'text-[#032855]' : 'text-cool-gray'}`}>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only" checked={!isMonthly} onChange={toggleBilling} />
          <div className="w-11 h-6 bg-[#032855] rounded-full"></div>
          <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${isMonthly ? "transform translate-x-0" : "translate-x-5"}`}></div>
        </label>
        <span className={`ml-4 ${!isMonthly ? 'text-[#032855]' : 'text-cool-gray'}`}>Yearly</span>
      </div>

      <div className="flex justify-between">
        <GoBackButton onClick={() => setCurrentStep(currentStep - 1)} />
        <NextButton onClick={handleNext} /> {/* Atualiza para usar handleNext */}
      </div>
    </div>
  );
};

export default SelectPlan;
