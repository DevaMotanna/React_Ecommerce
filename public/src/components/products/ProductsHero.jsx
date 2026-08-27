import Container from "../common/Container";

const ProductsHero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-5">
            Explore Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover products tailored for everyday lifestyle.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Search, filter, sort, and explore curated products across
            electronics, fashion, beauty, and home categories.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProductsHero;
