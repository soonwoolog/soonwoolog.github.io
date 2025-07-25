import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur">
      <nav className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <Link href="/" className="font-medium">
          soonwoolog
        </Link>
        <Link href="#" className="text-sm font-medium">
          About
        </Link>
      </nav>
    </header>
  );
}
