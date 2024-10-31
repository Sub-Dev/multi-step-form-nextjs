"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PersonalInfoForm from './PersonalInfoForm';
import SelectPlan from './PersonalInfoPlan';
import AddOnsForm from './PersonalInfoAddOns';
import Summary from './PersonalInfoSummary';
import ThankYou from './PersonalInfoThankYou';

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number }>({ name: 'Arcade', price: 9 });
  const [selectedAddOns, setSelectedAddOns] = useState<{ name: string; price: number }[]>([]);
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlanSelect = (plan: { name: string; price: number }) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <div className="hidden sm:grid bg-white p-3 rounded-lg shadow-lg grid-cols-7 max-w-5xl pl-3 min-h-[550px] min-w-[75%]">
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
              handlePlanSelect={handlePlanSelect}
            />
          )}
          {currentStep === 3 && (
            <AddOnsForm
              selectedAddOns={selectedAddOns}
              setSelectedAddOns={setSelectedAddOns}
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

      <div className="sm:hidden">
        <Sidebar currentStep={currentStep} />
        <div className="flex flex-col justify-between min-h-[100%] w-[90%] mx-[5%]">
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
              handlePlanSelect={handlePlanSelect}
            />
          )}
          {currentStep === 3 && (
            <AddOnsForm
              selectedAddOns={selectedAddOns}
              setSelectedAddOns={setSelectedAddOns}
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
    </>
  );
};

export default PersonalInfo;
