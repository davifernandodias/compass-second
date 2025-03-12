import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  appName?: string;
  type?: string;
  onclick?: () => void;
  disabled?: boolean;
}

export const Button = ({ children, className, onclick, disabled }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
