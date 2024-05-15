import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";



type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full border-none font-normal outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0 lg:w-auto",
        isActive
          ? "bg-white/10 font-medium text-white"
          : "bg-transparent text-violet-100",
      )}
    >
      <Link key={href} href={href}>
        <p>{label}</p>
      </Link>
    </Button>
  );
};

export default NavButton;