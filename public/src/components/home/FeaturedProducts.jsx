import { Link } from "react-router-dom";
import products from "../../data/products.json";
import Container from "../common/Container";
import Button from "../ui/Button";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            badge="Best Picks"
            title="Featured products"
            description="Browse top-rated products selected to give your storefront a premium and trustworthy feel."
          />
          <Link to="/products">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
