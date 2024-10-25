import React from 'react';
import NextButton from './NextButton';
import GoBackButton from './GoBackButton';

interface AddOn {
  name: string;
  description: string;
  monthlyPrice: string; // Preço mensal
  yearlyPrice: string; // Preço anual
}

const addOns: AddOn[] = [
  { name: 'Online service', description: 'Access to multiplayer games', monthlyPrice: '+$1/mo', yearlyPrice: '+$10/yr' },
  { name: 'Larger storage', description: 'Extra 1TB of cloud save', monthlyPrice: '+$2/mo', yearlyPrice: '+$20/yr' },
  { name: 'Customizable Profile', description: 'Custom theme on your profile', monthlyPrice: '+$2/mo', yearlyPrice: '+$20/yr' },
];

interface AddOnsFormProps {
  selectedAddOns: string[];
  setSelectedAddOns: (addOns: string[]) => void;
  currentStep: number; // Recebe o passo atual
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>; // Função para atualizar o passo atual
  billingType: 'monthly' | 'yearly'; // Tipo de faturamento
}

const AddOnsForm: React.FC<AddOnsFormProps> = ({
  selectedAddOns = [],
  setSelectedAddOns,
  currentStep,
  setCurrentStep,
  billingType, // Recebe o tipo de faturamento
}) => {
  const handleToggle = (addOn: string) => {
    if (selectedAddOns.includes(addOn)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== addOn));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  return (
    <div className="p-10 bg-white rounded-r-lg relative flex flex-col justify-between h-[100%] w-[100%]">
      <h2 className="text-3xl font-bold mb-1 text-black">Pick add-ons</h2>
      <p className="text-gray-400 mb-6">Add-ons help enhance your gaming experience.</p>
      <div className="space-y-4">
        {addOns.map((addOn) => (
          <label
            key={addOn.name}
            className={`flex items-center justify-between p-4 border border-light-gray rounded-lg cursor-pointer hover:bg-light-gray ${selectedAddOns.includes(addOn.name) ? 'bg-[#f8f8fb] border-[#706aa8]' : ''
              }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addOn.name)}
                onChange={() => handleToggle(addOn.name)}
                className="hidden" // Oculta o checkbox padrão
              />
              <div
                className={`w-5 h-5 border-2 rounded-md flex items-center justify-center mr-4 transition-all duration-200 ${selectedAddOns.includes(addOn.name) ? 'bg-[#403afd] border-[#403afd]' : 'border-light-gray'
                  }`}
              >
                {selectedAddOns.includes(addOn.name) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <p className="text-black font-semibold">{addOn.name}</p>
                <p className="text-gray-400">{addOn.description}</p>
              </div>
            </div>
            <p className="text-blue-600 font-bold">
              {billingType === 'yearly' ? addOn.yearlyPrice : addOn.monthlyPrice}
            </p>
          </label>
        ))}
      </div>
      <div className="flex justify-between mt-auto">
        <GoBackButton onClick={() => setCurrentStep(currentStep - 1)} />
        <NextButton onClick={() => setCurrentStep(currentStep + 1)} />
      </div>
    </div >
  );
};

export default AddOnsForm;
