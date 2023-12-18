import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  placeholder,
  ...rest
}) => {
  return (
    <label className="flex flex-col gap-1">
      <p className="text-sm font-semibold">{label}</p>
      <input
        placeholder={placeholder ?? label}
        className="px-3 py-2 border-2 border-gray-500 rounded-lg"
        {...rest}
      />
      {error && <p className="text-xs !text-red-500">{error}</p>}
    </label>
  );
};

export default Input;
