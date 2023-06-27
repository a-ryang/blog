import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center mx-auto px-4 xl:px-0 h-20 max-w-6xl">
        <h1 className="font-semibold text-lg">
          <Link href="/">
            <Image src="/logo.png" width={40} height={40} alt="a-ryang"></Image>
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
