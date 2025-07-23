import Link from "next/link";
import React from "react";

const G1 = () => {
  return (
    <div>
      <h1>F1 Page</h1>
      <div>
        <Link href="/f1/f2">Go to F2</Link> <br />
        <Link href="/f3">Go to F3</Link> <br />
      </div>
    </div>
  );
};

export default G1;
