"use client";
import React from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number; // 0-5
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  reviewCount?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showCount = false,
  reviewCount = 0,
  interactive = false,
  onRate,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = React.useState(0);

  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const displayRating = interactive && hoverRating > 0 ? hoverRating : rating;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of ${maxStars} stars`}>
        {Array.from({ length: maxStars }).map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= Math.floor(displayRating);
          const isHalf = starValue === Math.ceil(displayRating) && displayRating % 1 !== 0;

          return (
            <button
              key={index}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && onRate?.(starValue)}
              onMouseEnter={() => interactive && setHoverRating(starValue)}
              onMouseLeave={() => interactive && setHoverRating(0)}
              className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform duration-150`}
              aria-label={`Rate ${starValue} stars`}
            >
              {isHalf ? (
                <div className="relative">
                  <Star className={`${sizeClasses[size]} text-gray-300`} fill="currentColor" />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className={`${sizeClasses[size]} text-yellow-500`} fill="currentColor" />
                  </div>
                </div>
              ) : (
                <Star
                  className={`${sizeClasses[size]} ${
                    isFilled ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                />
              )}
            </button>
          );
        })}
      </div>

      {showCount && reviewCount > 0 && (
        <span className={`${textSizeClasses[size]} text-gray-600`}>
          ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
        </span>
      )}

      {!showCount && rating > 0 && (
        <span className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

