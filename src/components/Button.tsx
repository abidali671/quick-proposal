import React, { ButtonHTMLAttributes } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  label,
  className = "",
  variant = "primary",
  size = "md",
  ...rest
}) => {
  return (
    <button
      disabled={loading}
      className={
        "w-full rounded-md text-white font-medium whitespace-nowrap px-4 hover:bg-opacity-80 active:bg-opacity-60 " +
        (size === "md" ? "h-10 text-base " : "h-8 text-sm ") +
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
