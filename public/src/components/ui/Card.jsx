const Card = ({
  children,
  className = "",
  elevated = false,
  hoverable = false,
  ...props
}) => {
  const baseClasses =
    "rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden";

  const elevationClasses = elevated ? "shadow-lg hover:shadow-xl" : "";
  const hoverClasses = hoverable
    ? "hover:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`${baseClasses} ${elevationClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
