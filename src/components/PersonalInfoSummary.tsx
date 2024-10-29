import React from 'react';
import NextButton from './NextButton';
import GoBackButton from './GoBackButton';

interface SummaryProps {
  selectedPlan: { name: string; price: number };
  selectedAddOns: { name: string; price: number }[];
  billingType: 'monthly' | 'yearly';
  setCurrentStep: (step: number) => void;
}

const Summary: React.FC<SummaryProps> = ({ selectedPlan, selectedAddOns, billingType, setCurrentStep }) => {
  // Função para calcular o preço total
  const calculateTotal = () => {
    const planPrice = billingType === 'yearly' ? selectedPlan.price * 10 : selectedPlan.price;
    const addOnsPrice = selectedAddOns.reduce(
      (acc, addOn) => acc + (billingType === 'yearly' ? addOn.price * 10 : addOn.price),
      0
    );
    return planPrice + addOnsPrice;
  };

  // Função para o próximo passo
  const handleNext = () => setCurrentStep(5);

  return (
    <div className="p-10 bg-white rounded-r-lg relative flex flex-col justify-between h-[100%] w-[100%]">
      <h2 className="text-3xl font-bold mb-1 text-black">Finishing up</h2>
      <p className="text-gray-400 mb-6">Double-check everything looks OK before confirming.</p>

      <div className="bg-[#f8f8fb] p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="font-bold text-black">
              {selectedPlan.name} ({billingType === 'monthly' ? 'Monthly' : 'Yearly'})
            </span>
            <div>
              <span
                onClick={() => setCurrentStep(2)}
                className="text-gray-500 underline cursor-pointer"
              >
                Change
              </span>
            </div>
          </div>
          <span className="font-bold text-black">
            ${billingType === 'yearly' ? selectedPlan.price * 10 : selectedPlan.price}/{billingType === 'monthly' ? 'mo' : 'yr'}
          </span>
        </div>

        <hr className="border-t border-gray-300 my-2" />

        {selectedAddOns.map((addOn, index) => (
          <div key={index} className="flex justify-between mb-3 text-gray-500">
            <span>{addOn.name}</span>
            <span className='text-black'>
              +${billingType === 'yearly' ? addOn.price * 10 : addOn.price}/{billingType === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center font-bold text-lg text-gray-500 mb-6">
        <span>Total (per {billingType === 'monthly' ? 'month' : 'year'})</span>
        <span className="text-blue-500 text-xl">
          +${calculateTotal()}/{billingType === 'monthly' ? 'mo' : 'yr'}
        </span>
      </div>

      <div className="flex justify-between mt-2">
        <GoBackButton onClick={() => setCurrentStep(3)} />
        <NextButton onClick={handleNext} label="Confirm" />
      </div>
    </div>
  );
};

export default Summary;
