"use client";
import React from 'react';

interface SidebarProps {
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  return (
    <div
      className="col-span-2 bg-cover bg-no-repeat bg-center px-10 py-6 rounded-l-lg" // Reduzi o espaçamento lateral e adicionei bordas arredondadas
      style={{ backgroundImage: 'url(images/bg-sidebar-desktop.svg)' }}
    >
      <ul className="space-y-4 text-lg"> {/* Reduzi o espaçamento vertical */}
        {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((label, index) => {
          const step = index + 1;
          const isActive = step === currentStep;
          return (
            <li key={step} className="flex items-center space-x-2 text-[14px]"> {/* Reduzi o espaçamento lateral */}
              <div className="flex items-center">
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${isActive
                    ? "bg-[#bee1fc] text-black border border-white"
                    : "bg-transparent text-white border border-white"
                    }`}
                >
                  {step}
                </div>
                <div className="flex flex-col ml-2 text-[12px] mt-1"> {/* Reduzi o espaçamento entre o número e o texto */}
                  <span className="text-xs font-semibold text-gray-400">STEP {step}</span>
                  <span className={`font-bold ${isActive ? "text-white" : "text-white"}`}>{label}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
