import React from 'react';

interface GoBackButtonProps {
  onClick: () => void;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-cool-gray">
      Go Back
    </button>
  );
};

export default GoBackButton;
