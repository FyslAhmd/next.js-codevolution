import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Product Details Page {productId}</h1>
    </div>
  );
};

export default ProductDetails;
