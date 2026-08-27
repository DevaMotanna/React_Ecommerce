const SectionHeader = ({ badge, title, description, align = "left" }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} mb-10`}>
      {badge && (
        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
