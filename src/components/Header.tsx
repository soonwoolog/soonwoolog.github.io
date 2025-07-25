import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="font-medium">
            soonwoolog
          </Link>
        </div>
        <Link href="#" className="text-sm font-medium">
          About
        </Link>
      </nav>
    </header>
  );
}
