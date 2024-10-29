// "use client";
import React from 'react';

interface SidebarProps {
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  const isMobile = window.innerWidth < 376;
  return (
    <div className="absolute top-0 left-0 w-full sm:relative sm:w-auto sm:col-span-2">
      <div
        className={`absolute top-0 left-0 w-full h-full ${window.innerWidth < 640 ? 'h-[25vh]' : 'h-full'} bg-cover bg-no-repeat px-6 py-20 sm:relative sm:px-10 sm:py-6 sm:bg-top`}
        style={{
          backgroundImage: `url(${window.innerWidth < 640 ? 'images/bg-sidebar-mobile.svg' : 'images/bg-sidebar-desktop.svg'})`,
          backgroundSize: 'cover', // Faz a imagem cobrir todo o espaço disponível
          backgroundPosition: 'center', // Centraliza a imagem
        }}
      >
        <ul className={`flex sm:flex-col justify-center space-x-4 sm:space-x-0 sm:space-y-4 sm:text-lg relative z-20 mb-6 ${isMobile ? 'mt-[-60px]' : ''}`}>
          {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((label, index) => {
            const step = index + 1;
            const isActive = step === currentStep;
            return (
              <li key={step} className="flex items-center justify-center sm:justify-start space-x-2">
                <div className="flex items-center">
                  <div
                    className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${isActive
                      ? "bg-[#bee1fc] text-black border border-white"
                      : "bg-transparent text-white border border-white"
                      }`}
                  >
                    {step}
                  </div>
                  {/* Exibe o texto apenas em telas médias ou maiores */}
                  <div className="hidden sm:flex flex-col ml-2 text-[12px] mt-1">
                    <span className="text-xs font-semibold text-gray-400">STEP {step}</span>
                    <span className={`font-bold ${isActive ? "text-white" : "text-white"}`}>{label}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
