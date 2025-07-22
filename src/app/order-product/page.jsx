"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing an order");
    router.push("/");
  };
  return (
    <div>
      <h1 className="text-3xl">Order Product</h1>
      <button className="btn border" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}
