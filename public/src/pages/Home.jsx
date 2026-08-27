import HeroSection from "../components/home/HeroSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import PromoBanner from "../components/home/PromoBanner";
import TrustHighlights from "../components/home/TrustHighlights";
import NewsletterSection from "../components/home/NewsletterSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoBanner />
      <TrustHighlights />
      <NewsletterSection />
    </div>
  );
};

export default Home;
