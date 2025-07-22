"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({ params, searchParams }) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in Language {lang}</p>
      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <br />
      <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      <br />
      <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      <br />
    </div>
  );
}
