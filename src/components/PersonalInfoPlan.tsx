import React, { useState, useEffect } from 'react';
import NextButton from './NextButton';
import GoBackButton from './GoBackButton';

interface SelectPlanProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setBillingType: React.Dispatch<React.SetStateAction<'monthly' | 'yearly'>>;
  handlePlanSelect: (plan: { name: string; price: number }) => void;
}

const SelectPlan: React.FC<SelectPlanProps> = ({ currentStep, setCurrentStep, setBillingType, handlePlanSelect }) => {
  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const [isMonthly, setIsMonthly] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const plans = [
    { name: 'Arcade', price: 9, icon: 'images/icon-arcade.svg' },
    { name: 'Advanced', price: 12, icon: 'images/icon-advanced.svg' },
    { name: 'Pro', price: 15, icon: 'images/icon-pro.svg' },
  ];

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 640);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleBilling = () => {
    setIsMonthly(!isMonthly);
  };

  const handleNext = () => {
    setBillingType(isMonthly ? 'monthly' : 'yearly');
    setCurrentStep(currentStep + 1);
  };

  const handlePlanClick = (plan: { name: string; price: number }) => {
    setSelectedPlan(plan.name);
    handlePlanSelect(plan);
  };

  return (
    <div className={`bg-white rounded-lg relative flex flex-col justify-between ${isMobile ? 'p-4 h-[75vh] w-full' : 'p-10 h-full w-full rounded-r-lg'}`}>
      <div>
        <h2 className={`font-bold ${isMobile ? 'text-2xl mb-2' : 'text-3xl mb-1'} text-black`}>Select your plan</h2>
        <p className={`text-cool-gray ${isMobile ? 'text-sm mb-4' : 'mb-6'}`}>
          You have the option of monthly or yearly billing.
        </p>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4 mb-4' : 'grid-cols-3 gap-6 mb-6'}`}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`cursor-pointer border rounded-lg ${selectedPlan === plan.name ? 'bg-[#f8f8fb] border-[#706aa8]' : 'border-light-gray'} ${isMobile ? 'p-2 flex items-center mb-2' : 'p-4'}`}
              onClick={() => handlePlanClick(plan)}
            >
              <img src={plan.icon} alt={`${plan.name} icon`} className={`${isMobile ? 'w-8 h-8 mr-2' : 'w-10 h-10 mb-10'}`} />
              <div>
                <h3 className={`font-bold ${selectedPlan === plan.name ? 'text-[#032855]' : 'text-black'} ${isMobile ? 'text-md' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`text-cool-gray ${selectedPlan === plan.name ? 'text-[#032855]' : ''} ${isMobile ? 'text-sm' : ''}`}>
                  ${isMonthly ? plan.price : plan.price * 10}/mo
                </p>
                {!isMonthly && (
                  <p className={`text-[#032855] ${isMobile ? 'text-xs mt-0.5' : 'text-sm mt-2'}`}>
                    2 months free
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mb-6 bg-[#f8f9fe] p-3 rounded-lg">
        <span className={`mr-3 ${isMonthly ? 'text-[#032855]' : 'text-cool-gray'} text-sm`}>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only" checked={!isMonthly} onChange={toggleBilling} />
          <div className="w-10 h-5 bg-[#032855] rounded-full"></div>
          <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${isMonthly ? "transform translate-x-0" : "translate-x-5"}`}></div>
        </label>
        <span className={`ml-3 ${!isMonthly ? 'text-[#032855]' : 'text-cool-gray'} text-sm`}>Yearly</span>
      </div>

      {/* Botões para desktop e mobile */}
      {!isMobile ? (
        <div className="flex justify-between">
          <GoBackButton onClick={() => setCurrentStep(currentStep - 1)} />
          <NextButton onClick={handleNext} />
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between">
          <GoBackButton onClick={() => setCurrentStep(currentStep - 1)} />
          <NextButton onClick={handleNext} />
        </div>
      )}
    </div>
  );
};

export default SelectPlan;
