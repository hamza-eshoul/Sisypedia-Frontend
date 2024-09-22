import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonGlobalStyles = [
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-md",
  "text-sm",
  "px-3",
  "py-1.5",
  "font-medium",
  "transition-colors",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-gray-400",
  "focus:ring-offset-2",
  "disabled:opacity-50",
  "disabled:pointer-events-none",
];

const buttonStyles = cva(buttonGlobalStyles, {
  variants: {
    variant: {
      default: ["bg-black", "text-white", "hover:bg-gray-800"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonStyles({ variant: "default" }), className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
