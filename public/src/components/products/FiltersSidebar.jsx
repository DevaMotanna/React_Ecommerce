import categories from "../../data/categories.json";
import Button from "../ui/Button";

const FiltersSidebar = ({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  onClearFilters,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Clear All
        </button>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
          Category
        </h4>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "all"}
              onChange={() => setSelectedCategory("all")}
            />
            <span>All Categories</span>
          </label>

          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => setSelectedCategory(category.id)}
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
          Max Price: ${maxPrice}
        </h4>
        <input
          type="range"
          min="0"
          max="400"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-2">
        <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
          Minimum Rating
        </h4>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3"
        >
          <option value={0}>All Ratings</option>
          <option value={4}>4★ & above</option>
          <option value={4.5}>4.5★ & above</option>
        </select>
      </div>

      <Button variant="secondary" className="w-full mt-6">
        Apply Filters
      </Button>
    </div>
  );
};

export default FiltersSidebar;
