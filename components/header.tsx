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
          <ul className="flex gap-x-5 lg:flex-row lg:gap-x-10">
            <li>
              <Link href="/about" passHref>
                <a className="text-[14px] lg:text-base">About</a>
              </Link>
            </li>
            <li>
              <a
                href="https://next-js-portfolio-rouge.vercel.app/"
                target="_blank"
                className="text-[14px] lg:text-base"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
