import { Search } from "lucide-react";


const ProductsToolbar = ({
  totalResults,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
        <p className="text-gray-600 mt-1">
          Showing {totalResults} product{totalResults !== 1 ? "s" : ""}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative min-w-[260px]">
          <Search className="absolute left-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="default">Sort: Default</option>
            <option value="price-low-high">Price: Low To High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-hogh-low">Rating: High to Low</option>
            <option value="name-a-z">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsToolbar;
