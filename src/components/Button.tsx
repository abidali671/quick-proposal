import React, { ButtonHTMLAttributes } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary";
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  label,
  className = "",
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      disabled={loading}
      className={
        "w-full h-10 rounded-md text-white font-medium " +
        (variant === "primary" ? "bg-orange-light " : "bg-gray-dark ") +
        className
      }
      {...rest}
    >
      {loading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
