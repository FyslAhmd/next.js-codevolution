"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <section>
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
