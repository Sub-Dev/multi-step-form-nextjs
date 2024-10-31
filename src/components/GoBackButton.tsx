import React from 'react';

interface GoBackButtonProps {
  onClick: () => void;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-cool-gray hover:text-black transition-colors duration-200"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
