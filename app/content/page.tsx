"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NotionBlocks from "notion-block-renderer";
import Link from "next/link";

export default function NotionContentPage() {
  const [blocks, setBlocks] = useState([]);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    fetch(`/api/notion/${id}`)
      .then(res => res.json())
      .then(setBlocks);
  }, []);

  return (
    <div>
      <NotionBlocks blocks={blocks} />
      <Link href="/">Home</Link>
    </div>
  );
}
