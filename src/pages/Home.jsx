
import Container from "../componets/common/Container"
import HeroSection from "../componets/Home/HeroSection"
import FeatureProducts from "../componets/Home/FeatureProducts"
import FeatureCategories from "../componets/Home/FeatureCategories"
import PromoBanner from "../componets/Home/PromoBanner"
import TrustHighlights from "../componets/Home/TrustHighlights"
import NewsletterSection from "../componets/Home/NewsletterSection"

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <FeatureCategories />
      <FeatureProducts />
      <PromoBanner />
      <TrustHighlights />
      <NewsletterSection />
    </Container>
  )
}

export default Home