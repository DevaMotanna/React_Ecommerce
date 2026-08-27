import categories from "../../data/categories.json";
import Container from "../common/Container";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";

const FeaturedCategories = () => {
  return (
    <section
      id="featured-categories"
      className="py-16 md:py-20 bg-white dark:bg-gray-900"
    >
      <Container>
        <SectionHeader
          badge="Top Categories"
          title="Shop by category"
          description="Explore handpicked collections across the most popular categories in our store."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
