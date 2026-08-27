import ProductCard from "../home/ProductCard";
import EmptyState from "./EmptyState";

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
