import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`bg-primary-lightPurple-1 text-white text-xl font-bold leading-sm px-7 py-3 rounded-3xl inline-block uppercase outline-none ${className}`}>
      {children}
    </button>
  );
};

export default Button;
