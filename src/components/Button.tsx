import React, { ButtonHTMLAttributes } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ loading, label, ...rest }) => {
  return (
    <button
      className="w-full h-10 bg-[#ff6347] rounded-lg text-white font-medium"
      {...rest}
    >
      {loading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
