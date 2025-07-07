import Link from "next/link";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export default function Header() {
  return (
    <header className="sticky backdrop-filter">
      <nav className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <Link href="/" className="font-medium">
          soonwoolog
        </Link>
        <NavigationMenu className="h-12">
          <NavigationMenuList>
            <NavigationMenuItem className="text-sm">
              <NavigationMenuLink className="">Video Editing</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-sm">
              <NavigationMenuLink>JavaScript</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="#" className="text-sm font-medium">
          About
        </Link>
      </nav>
    </header>
  );
}
