import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { toggleWishlist } from "../../store/Slices/wishlistSlice";
import { addToCart } from "../../store/Slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Card className="group h-full overflow-hidden" hoverable>
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <button
          onClick={() => dispatch(toggleWishlist(product))}
          className={`absolute top-4 right-4 p-2 rounded-full shadow ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-white/90 hover:bg-white text-gray-700"
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {discount > 0 && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">{discount}% OFF</Badge>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col h-[calc(100%-16rem)]">
        <p className="text-sm capitalize text-gray-500 dark:text-gray-400 mb-2">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {product.rating}
          </span>
          <span className="text-sm text-gray-400">
            • {product.stock} in stock
          </span>
        </div>

        <div className="mb-5">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <Button
          className="mt-auto w-full"
          onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
