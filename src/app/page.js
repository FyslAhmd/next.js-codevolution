import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link> <br />
      <Link href="/products">Products</Link> <br />
      <Link href="/articles/breaking-news?lang=en">Read In English</Link> <br />
      <Link href="/articles/breaking-news?lang=fr">Read In French</Link>
      <br />
    </div>
  );
}
