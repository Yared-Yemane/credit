import { Star } from "lucide-react";
import ReviewData from "../data/ReviewData";

const RatingReviews = () => {
  const RatingReviewsData = ReviewData;
  return (
    <div className="flex items-center space-x-3 -mt-6">
      {/* Overlapping avatars */}
      <div className="flex">
        {RatingReviewsData.map((src, index) => (
          <img
            key={index}
            src={src.img}
            alt={`User ${index + 1}`}
            className="w-14 h-14 rounded-full object-cover border-2 border-white -ml-2 first:ml-0"
          />
        ))}
      </div>

      {/* Rating score and stars */}
      <div>
        <div className="flex items-center space-x-3">
          <div>
            {" "}
            <span className="text-base font-semibold">4.7</span>
          </div>
          <div className="flex">
            {" "}
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-blue-900 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Rating reviews from over <b> 12k+ </b>customers
        </p>
      </div>
    </div>
  );
};

export default RatingReviews;
