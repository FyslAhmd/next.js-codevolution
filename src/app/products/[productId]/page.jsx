import React from "react";

export const generateMetadata = async ({ params }) => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Product Details Page {productId}</h1>
    </div>
  );
};

export default ProductDetails;
