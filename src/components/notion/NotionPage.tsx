"use client";

import { useEffect, useState } from "react";
import { NotionResult } from "@/src/lib/notion/notion-config";
import Link from "next/link";

export default function NotionPage() {
  const [list, setList] = useState<NotionResult[]>([]);

  useEffect(() => {
    fetch("/api/notion")
      .then(res => res.json())
      .then(setList);
  }, []);

  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">All Posts</h2>
      <ol className="notion-posts">
        {list.map(row => {
          return (
            <li key={row.id}>
              <Link href={{ pathname: "/content", query: { id: row.id } }}>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{row.title}</h4>
                <p className="font-medium">{row.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
