"use client";

import { useEffect, useState } from "react";
import { NotionResult } from "@/src/lib/notion/notion-config";
import Link from "next/link";

export default function NotionPosts() {
  const [list, setList] = useState<NotionResult[]>([]);

  useEffect(() => {
    fetch("/api/notion")
      .then(res => res.json())
      .then(setList);
  }, []);

  return (
    <>
      <div className="text-[32px] font-semibold tracking-tight mb-[24px]">All Posts</div>
      <ul>
        {list.map(row => {
          return (
            <li key={row.id} className="p-[58px] bg-white rounded-[32px]">
              <Link href={{ pathname: "/content", query: { id: row.id } }}>
                <div className="text-[12px] mb-[8px] uppercase">Category</div>
                <div className="text-[21px] font-semibold tracking-tight">{row.title}</div>
                <div className="text-[14px] mt-[12px] font-medium">{row.date}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
