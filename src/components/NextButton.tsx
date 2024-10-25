// NextButton.tsx
import React from 'react';

interface NextButtonProps {
  onClick: () => void;
  label?: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, label = "Next Step" }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#03295a] text-white py-2 px-6 rounded-lg hover:bg-light-blue transition text-base font-semibold"
    >
      {label}
    </button>
  );
};

export default NextButton;
