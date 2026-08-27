import { Link } from "react-router-dom";
import Card from "../ui/Card";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products?category=${category.id}`}>
      <Card className="group overflow-hidden" hoverable>
        <div className="relative h-64 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-5 text-white">
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-sm text-gray-200">{category.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
