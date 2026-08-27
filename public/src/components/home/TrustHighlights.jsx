import { BadgeCheck, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import Container from "../common/Container";
import Card from "../ui/Card";

const items = [
  {
    icon: Truck,
    title: "Free shipping",
    description: "Fast and reliable delivery on qualifying orders.",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    description: "Simple return policy to improve customer confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    description: "Trusted payment experience with safe order flow.",
  },
  {
    icon: BadgeCheck,
    title: "Quality guarantee",
    description: "Carefully selected products with dependable quality.",
  },
];

const TrustHighlights = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TrustHighlights;
