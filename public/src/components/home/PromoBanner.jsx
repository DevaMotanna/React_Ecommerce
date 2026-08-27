import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../ui/Button";

const PromoBanner = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Up to 40% off on selected bestsellers.
              </h2>
              <p className="text-white/85 text-lg mb-6 max-w-xl">
                Unlock exciting deals across electronics, home decor, and
                fashion. Perfect for teaching promotional UI sections in React.
              </p>
              <Link to="/products">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 border-white"
                >
                  Shop Deals
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                alt="Headphones offer"
                className="rounded-2xl h-44 md:h-56 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                alt="Watch offer"
                className="rounded-2xl h-44 md:h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PromoBanner;
