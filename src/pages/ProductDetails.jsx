
import { Heart, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import Container from "../componets/common/Container";
import Button from "../componets/ui/Button";
import Badge from "../componets/ui/Badge";
import ReviewsSection from "../componets/Products/ReviewsSection";
import RelatedProducts from "../componets/Products/RelatedProducts";
import reviews from "../data/reviews.json";
import { useMemo, useState } from "react";
import QuantitySelector from "../componets/Products/QuantitySelector";
import { addToCart } from "../Store/Slices/cartSlice";
import { useDispatch } from "react-redux";


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const  [quantity, setQuantity] = useState(1)

   const dispatch = useDispatch();

   const productReviews = useMemo(
    () => reviews.filter((review) => review.productId === Number(id)),
    [id],
  );

   const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(
        (item) => item.category === product.category && item.id !== product.id,
      )
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Product not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The product you are trying to access does not exist.
          </p>
          <Link
            to="/products"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-10 md:py-14">
      <Container>
        <div className="mb-8">
          <Link
            to="/products"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 dark:border-gray-800">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-105 md:h-140 object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize">
                {product.category}
              </Badge>
              {discount > 0 && <Badge variant="primary">{discount}% OFF</Badge>}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-1 mb-5">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-900 dark:text-white">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                {product.stock} items in stock
              </span>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-3 text-xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-8 mb-8">
              {product.description}
            </p>

            <div className="mb-8 text-white">
              <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                className="flex-1 rounded-md"
                onClick={()=> dispatch(addToCart({product,quantity}))}
              >
                <ShoppingCart className="w-5 h-5" />
                Add {quantity} to Cart
              </Button>

              <Button
                className="flex-1 rounded-md"
              >
                <Heart/>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Fast Delivery
                  </h3>
                </div>
                <p className="text-sm text-gray-800">
                  Estimated delivery within 3 to 5 business days.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Secure Checkout
                  </h3>
                </div>
                <p className="text-sm text-gray-800">
                  Safe payment flow and quality assurance for every order.
                </p>
              </div>
            </div>
          </div>
        </div>

          <ReviewsSection reviews={productReviews} />
        <RelatedProducts  products={relatedProducts}/>
      </Container>
    </div>
  );
};

export default ProductDetails;