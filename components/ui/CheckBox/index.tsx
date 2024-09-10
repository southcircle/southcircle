'use client'
import React, { useState } from 'react';

interface CheckButtonProps {
  title: string;
  name: string;
  value: string;
  onCheck?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckButtonProps> = ({ title, name, value, onCheck }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (onCheck) {
      onCheck(!isChecked);
    }
  };

  return (
    <label
      className={`flex items-center p-8 rounded-full border ${
        isChecked ? 'border-black bg-transparent' : 'border-gray-200'
      } transition-colors duration-300 ease-in-out cursor-pointer`}
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
      <span className="text-gray-800 font-neuehaasroman">{title}</span>
    </label>
  );
};

export default CheckBox;
