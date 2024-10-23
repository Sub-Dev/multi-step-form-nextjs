"use client";
import React from 'react';

interface SidebarProps {
  currentStep: number; // Define a propriedade currentStep
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  return (
    <div
      className="col-span-1 bg-cover bg-no-repeat bg-center p-6 rounded-l-lg"
      style={{ backgroundImage: 'url(images/bg-sidebar-desktop.svg)' }} // Substitua pelo caminho correto da imagem    
    >
      <ul className="space-y-6 text-lg">
        {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((label, index) => {
          const step = index + 1; // Passo começa em 1          
          const isActive = step === currentStep; // Verifica se o passo atual é o passo atual          
          return (
            <li key={step} className="flex items-center space-x-3">
              <div className="flex items-center">
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${isActive
                    ? "bg-[#bee1fc] text-black border border-white" // Círculo ativo                    
                    : "bg-transparent text-white border border-white" // Círculo inativo                    
                    }`}
                >
                  {step}
                </div>
                <div className="flex flex-col ml-4 text-[12px]"> {/* Aumenta o espaçamento entre os textos e o número */}
                  <span className="text-xs font-semibold text-gray-400 mt-0">STEP {step}</span> {/* Diminui o espaçamento entre o "STEP" e o texto */}
                  <span className={`font-bold ${isActive ? "text-white" : "text-white opacity-50"} mt-0`}>{label}</span> {/* Texto em negrito e branco */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div >
  );
};

export default Sidebar;
