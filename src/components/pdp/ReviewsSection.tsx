"use client";
import React, { useState } from "react";
import StarRating from "./StarRating";
import { ThumbsUp, User } from "lucide-react";

type Review = {
  id: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
};

type ReviewsSectionProps = {
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
  onWriteReview?: () => void;
};

export default function ReviewsSection({
  averageRating,
  totalReviews,
  reviews,
  onWriteReview,
}: ReviewsSectionProps) {
  const [sortBy, setSortBy] = useState<"recent" | "helpful">("recent");

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((r) => Math.floor(r.rating) === stars).length;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { stars, count, percentage };
  });

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "helpful") return b.helpful - a.helpful;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="max-w-4xl">
      {/* Rating Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Average Rating */}
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
            <StarRating rating={averageRating} size="lg" />
            <p className="text-sm text-gray-600 mt-2">
              Based on {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
            </p>
            <button
              onClick={onWriteReview}
              className="mt-4 px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              Write a Review
            </button>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ stars, count, percentage }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-6">{stars}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Customer Reviews ({totalReviews})
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "recent" | "helpful")}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
        >
          <option value="recent">Most Recent</option>
          <option value="helpful">Most Helpful</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <article
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {review.userName}
                    {review.verified && (
                      <span className="ml-2 text-xs text-green-600 font-normal">
                        ✓ Verified Purchase
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} size="sm" />
            </div>

            <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
            <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <ThumbsUp className="h-4 w-4" />
                Helpful ({review.helpful})
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      {reviews.length < totalReviews && (
        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all duration-200">
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
}

