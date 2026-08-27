import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-8 h-8 text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No products found
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        Try changing your search or filters to find more products.
      </p>
    </div>
  );
};

export default EmptyState;
