import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-white border-b">
      <Container>
        <div className="flex justify-between w-full py-4">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <div className="text-xl font-medium cursor-pointer">soonwoolog</div>
            </Link>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-xl"
                    href="https://github.com/soonwoochoi"
                    target="blank"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-xl"
                    href="https://www.linkedin.com/in/soonwoochoi/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
