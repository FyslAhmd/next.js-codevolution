import React from "react";

export const metadata = {
  title: "Blog",
};

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("internal delay");
    }, 2000);
  });

  return <div className="text-2xl text-center">This is Blog Page</div>;
};

export default Blog;
