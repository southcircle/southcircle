import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  text: string;
  size?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string; // New className prop
}

const Button: React.FC<ButtonProps> = ({
  text,
  size,
  variant = 'primary',
  onClick,
  className, // Accepting custom className
}) => {


  // Define variants for text, background, and border based on the button type
  const baseClasses = {
    primary: 'bg-blue-500 text-white border-transparent',
    secondary: 'bg-gray-500 text-white border-transparent',
    outline: 'bg-white text-black border-black',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        'relative overflow-hidden transition-all duration-300 border font-neuehassroman group',
        size, // Predefined size classes
        baseClasses[variant], // Predefined variant classes
        className // Custom classes passed via the className prop
      )}
    >
      {/* Button Text */}
      <span
        className={clsx(
          'relative z-10 transition-colors duration-500 ease-in-out',
          {
            'group-hover:text-white': variant === 'outline' || variant === 'primary',
            'group-hover:text-black': variant === 'secondary',
          }
        )}
      >
        {text}
      </span>
      {/* Background Animation */}
      <span
        className="rounded-full absolute inset-0 bg-black transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"
      />
    </button>
  );
};

export default Button;
