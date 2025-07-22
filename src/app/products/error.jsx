"use client";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
}
