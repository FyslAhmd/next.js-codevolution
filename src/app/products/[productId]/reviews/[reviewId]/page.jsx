import { redirect } from "next/navigation";
import React from "react";

const getRandomInt = (count) => {
  return Math.floor(Math.random() * count);
};

const ReviewPage = async ({ params }) => {
  const { reviewId } = await params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (reviewId > 1000) {
    redirect("/products");
  }
  return (
    <div>
      <h1>This is review {reviewId}</h1>
    </div>
  );
};

export default ReviewPage;
