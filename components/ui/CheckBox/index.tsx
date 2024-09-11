'use client'
import clsx from 'clsx';
import React, { useState } from 'react';

interface CheckButtonProps {
  title: string;
  name: string;
  value: string;
  onCheck?: (checked: boolean) => void;
  className?: string;
}

const CheckBox: React.FC<CheckButtonProps> = ({ title, name, value, onCheck, className }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (onCheck) {
      onCheck(!isChecked);
    }
  };

  return (
    <label
      className={clsx(className, `${
        isChecked ? 'border-black bg-transparent' : 'border-gray-200'
      } flex items-center p-4 md:p-8 rounded-full border transition-colors duration-300 ease-in-out cursor-pointer`)}
    >
      {/* Hidden checkbox input */}
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleCheck}
        className="hidden"
      />

      {/* Custom square box */}
      <div
        className={`w-5 h-5 border mr-4 ${
          isChecked ? 'bg-black' : 'bg-white'
        } border-gray-400`}
      ></div>
      
      {/* Title */}
      <span className="text-gray-800 font-neuehaasroman text-start leading-5">{title}</span>
    </label>
  );
};

export default CheckBox;
