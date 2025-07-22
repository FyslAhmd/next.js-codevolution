import { redirect } from "next/navigation";
import React from "react";

const ReviewPage = async ({ params }) => {
  const { reviewId } = await params;
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
