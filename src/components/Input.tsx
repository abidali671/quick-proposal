import React from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  label: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  placeholder,
}) => {
  return (
    <label className="flex flex-col gap-1">
      <p className="text-sm font-semibold">{label}</p>
      <input
        required
        placeholder={placeholder ?? label}
        className="px-3 py-2 border-2 border-gray-500 rounded-lg"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
