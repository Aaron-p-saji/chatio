import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ui/theme-toggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex max-h-16 justify-between sticky z-50 w-full px-6 py-4 lg:px-10 top-0 dark:bg-background bg-background">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/chatio.svg"
          width={25}
          height={25}
          alt="chatio logo"
          className="max-sm:size-7"
        />
        <p className="text-xl font-extrabold">Chatio</p>
      </Link>
      <div className="flex space-x-5 items-center">
        <Image
          src="/static/profile-placeholder.png"
          width={25}
          height={25}
          alt="image placeholder"
          className="max-sm:size-8 rounded-full border-black border-2"
        />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
