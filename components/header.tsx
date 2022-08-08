import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-3 container mx-auto lg:max-w-4xl lg:py-5">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="relative w-[5rem] h-[2rem] lg:w-[7rem]">
            <Image
              src="/images/logo.svg"
              layout="fill"
              alt="header-logo"
              objectFit="contain"
            />
          </a>
        </Link>
        <nav>
          <ul>
            <li className="lg:text-xl">
              <Link href="/about" passHref>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
