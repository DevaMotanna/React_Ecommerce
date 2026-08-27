import Container from "../common/Container";
import Button from "../ui/Button";

const NewsletterSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-gray-950 text-white px-6 py-10 md:px-12 md:py-14 text-center">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get offers, drops, and updates in your inbox.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            A newsletter section is a common e-commerce conversion block and a
            good example of reusable CTA-driven UI.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button size="lg">Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;
