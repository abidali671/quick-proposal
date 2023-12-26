import React, { ButtonHTMLAttributes } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  label,
  className = "",
  ...rest
}) => {
  return (
    <button
      disabled={loading}
      className={
        "w-full h-10 bg-orange-light rounded-md text-white font-medium " +
        className
      }
      {...rest}
    >
      {loading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
