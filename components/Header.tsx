import { UserButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import HeaderLogo from "@/components/HeaderLogo";
const Header = () => {
  return (
    <header className="bg-gradient-to-b from-violet-900 to-violet-500 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navbar />
          </div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
