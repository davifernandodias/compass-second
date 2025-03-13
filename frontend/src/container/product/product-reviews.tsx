import { formatDate } from "@/utils/date-format";
import IconHalfStar from "@public/svg/clothes/icon-half-star";
import IconStars from "@public/svg/clothes/icon-stars";
import IconVerifyReviews from "@public/svg/clothes/icon-verify-reviews";

const ProductReviews = ({ productGroup }: { productGroup: GetProductsResponse }) => {
  const { reviews = [], products } = productGroup;

  const productAssessment = products ? products.assessment : null;

  const names = ["Samantha D.", "Alex M.", "Ethan R.", "Olivia P.", "Liam K.", "Ava H."];

  const reviewsWithProductAssessment = reviews.map((review, index) => ({
    ...review,
    assessment: productAssessment,
    name: names[index % names.length],
  }));

  return (
    <div className="flex flex-col justify-center items-center bg-white lg:p-6">
      {reviewsWithProductAssessment.length > 0 ? (
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2  lg:items-center  lg:gap-8">
          {reviewsWithProductAssessment.map((review, index) => {
            
            const formattedDate = formatDate(review.feedback_date);

            return (
              <div key={index} className="flex flex-col gap-2.5 border border-gray-secundary rounded-3xl p-7  lg:h-60 lg:w-[610px]">
                <div className="flex gap-2">
                  {Array.from({ length: Math.floor(review.assessment!) }).map((_, index) => (
                    <IconStars key={index} className="w-4.5 h-4.5 lg:w-4.5 lg:h-4.5" />
                  ))}
                  {Number.isInteger(review.assessment) ? null : (
                    <IconHalfStar className="w-4.5 h-4.5 lg:w-4.5 lg:h-4.5" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <p className="font-family-satoshi-medium font-bold text-16">{review.name}</p>
                    <IconVerifyReviews className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="font-family-satoshi-medium text-gray-text text-14 font-normal">
                      "{review.comment}"
                    </p>
                  </div>
                  <div>
                    <p className="font-family-satoshi-medium font-medium text-gray-text text-14 -mb-3">Posted on {formattedDate}</p>
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
      ) : (
        <p>Sem avaliações.</p>
      )}
    </div>
  );
};

export default ProductReviews;
