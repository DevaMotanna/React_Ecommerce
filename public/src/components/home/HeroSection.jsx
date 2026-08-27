import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white m-5 rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 via-purple-700/20 to-pink-600/20" />
      <Container className="relative py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm mb-6">
              <ShoppingBag className="w-4 h-4" />
              New season collection is live
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Shop smarter with curated products for modern living.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
              Discover premium picks across fashion, electronics, home, and
              beauty — all in one beautifully crafted shopping experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <a href="#featured-categories">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Browse Categories
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-sm text-gray-400">Happy customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-sm text-gray-400">Curated products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-gray-400">Customer support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                alt="Fashion collection"
                className="h-64 md:h-80 w-full object-cover rounded-3xl"
              />
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
                alt="Electronics collection"
                className="h-64 md:h-80 w-full object-cover rounded-3xl mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                alt="Home collection"
                className="h-64 md:h-80 w-full object-cover rounded-3xl -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Beauty collection"
                className="h-64 md:h-80 w-full object-cover rounded-3xl mt-4"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
