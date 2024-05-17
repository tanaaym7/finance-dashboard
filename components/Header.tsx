import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeaderLogo from "@/components/HeaderLogo";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-violet-800 to-violet-400 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navbar />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-medium lg:text-4xl">Welcome Back</h1>
          <p className="text-sm font-medium italic text-[#d7bfe5] lg:text-lg">
            This is your Financial Overview Report
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
