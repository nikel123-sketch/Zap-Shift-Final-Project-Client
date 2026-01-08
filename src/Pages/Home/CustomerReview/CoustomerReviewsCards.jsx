import React from "react";

const CoustomerReviewsCards = ({ reviewdata }) => {
  if (!reviewdata) return null;

  const {
    date,
    ratings,
    review,
    userName,
    user_email,
    user_photoURL,
  } = reviewdata;

  return (
     <div className="bg-gray-200 shadow-3xl rounded-xl p-6  hover:bg-amber-100">
      {/* User info */}
      <div className="flex items-center gap-4 mb-4 ">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 mb-4 leading-relaxed">“{review}”</p>

      {/* Rating + Date */}
      <div className="flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index < ratings ? "text-yellow-400" : "text-gray-300"}
            >
              ★
            </span>
          ))}
        </div>

        {/* Date */}
        <span className="text-sm text-gray-400">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
  
};

export default CoustomerReviewsCards;
