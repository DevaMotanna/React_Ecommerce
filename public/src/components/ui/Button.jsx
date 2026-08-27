import { forwardRef } from "react";

const Button = forwardRef(
  (
    { children, variant = "primary", size = "md", className = "", ...props },
    ref,
  ) => {
    const baseClasses =
      "btn inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500",
      secondary:
        "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-500",
      outline:
        "border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white focus:ring-blue-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
