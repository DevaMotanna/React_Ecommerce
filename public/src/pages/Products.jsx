import { useMemo, useState } from "react";
import products from "../data/products.json";
import ProductsToolbar from "../components/products/ProductsToolbar";
import FiltersSidebar from "../components/products/FiltersSidebar";
import ProductGrid from "../components/products/ProductGrid";
import ProductsHero from "../components/products/ProductsHero";
import Container from "../components/common/Container";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(400);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let updatedProducts = [...products];

    updatedProducts = updatedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory,
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price <= maxPrice,
    );
    updatedProducts = updatedProducts.filter(
      (product) => product.rating >= minRating,
    );

    switch (sortBy) {
      case "price-low-high":
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating-high-low":
        updatedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "name-a-z":
        updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return updatedProducts;
  }, [searchTerm, selectedCategory, maxPrice, minRating, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setMaxPrice(400);
    setMinRating(0);
    setSortBy("default");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <ProductsHero />

      <section className="py-12 md:py-16">
        <Container>
          <ProductsToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalResults={filteredProducts.length}
          />

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <FiltersSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minRating={minRating}
              setMinRating={setMinRating}
              onClearFilters={clearFilters}
            />

            <ProductGrid products={filteredProducts} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Products;
