import type { ButtonProps } from "../types/button";

type ButtonVariant = "primary";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-btn-primary text-primary bg-white hover:bg-beige hover:cursor-pointer",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm ",
  md: "px-4 py-2 text-base ",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-3xl font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2
        border-2 border-black shadow-[4px_4px_0_0_black] 
        active:translate-x-0.75 active:translate-y-0.75 active:shadow-none
        
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    />
  );
}
