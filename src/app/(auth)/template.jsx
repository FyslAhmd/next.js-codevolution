"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <section>
      <div>
        <input
          type="text"
          className="border m-2 p-2 w-2/6"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link, ind) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            href={link.href}
            key={ind}
            className={`p-2 mx-4 text-lg ${
              isActive ? "font-bold bg-blue-400" : "bg-gray-400"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </section>
  );
}
