import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, ...rest }) => {
  return (
    <label className="flex flex-col gap-1">
      <p className="text-sm font-semibold">{label}</p>
      <input
        required
        placeholder={placeholder ?? label}
        className="px-3 py-2 border-2 border-gray-500 rounded-lg"
        {...rest}
      />
    </label>
  );
};

export default Input;
