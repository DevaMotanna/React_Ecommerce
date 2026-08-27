const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
    primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    success:
      "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
