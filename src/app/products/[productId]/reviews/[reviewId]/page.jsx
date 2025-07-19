import React from "react";
import { notFound } from "next/navigation";

const ReviewPage = async ({ params }) => {
  const { reviewId } = await params;
  if (reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>This is review {reviewId}</h1>
    </div>
  );
};

export default ReviewPage;
