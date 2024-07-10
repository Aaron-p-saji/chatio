import Navbar from "@/components/global/navbar";
import { PlusIcon } from "lucide-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <main className="relative dark:bg-background h-full w-full">
      {children}
    </main>
  );
};

export default RootLayout;
