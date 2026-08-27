import { Star } from "lucide-react";

const ReviewsSection = ({ reviews }) => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center bg-white dark:bg-gray-900">
          <p className="text-gray-600 dark:text-gray-300">
            No reviews yet for this product.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {review.name}
                </h3>

                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
