import React from "react";

const ReviewPage = async ({ params }) => {
  const { reviewId } = await params;
  return (
    <div>
      <h1>This is review {reviewId}</h1>
    </div>
  );
};

export default ReviewPage;
