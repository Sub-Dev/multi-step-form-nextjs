"use client";
import React, { useState } from 'react';

interface SelectPlanProps {
  currentStep: number; // Recebe o passo atual
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>; // Função para atualizar o passo atual
}

const SelectPlan: React.FC<SelectPlanProps> = ({ currentStep, setCurrentStep }) => {
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

  return (
    <div className="p-10 bg-white rounded-r-lg relative flex flex-col justify-between h-[500px] w-[700px]">
      <div>
        <h2 className="text-3xl font-bold mb-1 text-black">Select your plan</h2>
        <p className="text-cool-gray mb-6">You have the option of monthly or yearly billing.</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === plan.name ? 'border-purplish-blue' : 'border-light-gray'}`}
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
        <button onClick={() => setCurrentStep(currentStep - 1)} className="text-cool-gray">Go Back</button>
        <button onClick={() => setCurrentStep(currentStep + 1)} className="bg-[#03295a] text-white py-2 px-6 rounded-lg hover:bg-light-blue transition text-base font-semibold">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
