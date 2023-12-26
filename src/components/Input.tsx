import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface iTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

type InputProps = { multiline?: boolean; variant?: "outlined" | "filled" } & (
  | iInputProps
  | iTextareaProps
);

const Input: React.FC<InputProps> = ({
  label,
  error,
  placeholder,
  multiline,
  className = "",
  variant = "outlined",
  onChange,
  ...rest
}) => {
  return (
    <label className={"flex flex-col gap-1 " + className}>
      {label && <p className="text-sm font-semibold">{label}</p>}
      {multiline ? (
        <textarea
          placeholder={placeholder ?? label}
          className={
            "px-3 py-2 border-2 rounded-md " +
            (variant === "outlined"
              ? "border-gray-500"
              : "border-gray-100 bg-gray-100")
          }
          onChange={onChange as ChangeEventHandler<HTMLTextAreaElement>}
          {...(rest as iTextareaProps)}
        />
      ) : (
        <input
          placeholder={placeholder ?? label}
          className={
            "px-3 py-2 border-2 rounded-md " +
            (variant === "outlined"
              ? "border-gray-500"
              : "border-gray-100 bg-gray-100")
          }
          onChange={onChange as ChangeEventHandler<HTMLInputElement>}
          {...(rest as iInputProps)}
        />
      )}
      {error && <p className="text-xs !text-red-500">{error}</p>}
    </label>
  );
};

export default Input;
