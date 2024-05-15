import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          className="hidden lg:block"
          src="/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
