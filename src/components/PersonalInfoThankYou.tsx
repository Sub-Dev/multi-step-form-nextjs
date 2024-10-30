import React, { useEffect, useState } from 'react';

const ThankYou = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define a largura máxima para mobile
    };

    handleResize(); // Verifica a largura inicial
    window.addEventListener('resize', handleResize); // Adiciona o listener de resize

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o listener quando o componente é desmontado
    };
  }, []);

  return (
    <div className={`bg-white rounded-lg relative flex flex-col items-center justify-center ${isMobile ? 'p-4 h-[75vh] w-full' : 'p-10 h-full w-full'}`}>
      <div className="flex flex-col items-center justify-center text-center px-8">
        <img src="images/icon-thank-you.svg" alt="Thank you" className="w-16 h-16 mb-6" />
        <h1 className="text-3xl font-bold text-[#032855] mb-4">Thank you!</h1>
        <p className="text-cool-gray text-lg">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          please feel free to email us at <span className="font-bold">support@loremgaming.com</span>.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
