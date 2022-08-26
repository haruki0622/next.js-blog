import React from "react";
import Image from "next/image";
import { FaTwitter, FaGithub } from "react-icons/fa";

type Props = {
  justifyStart?: string;
};

export default function Sns({ justifyStart }: Props) {
  return (
    <ul className={`flex mt-5 ${justifyStart}`}>
      <li className="mx-0 mr-2">
        <a
          className="hover:underline hover:text-gray-300 "
          href="https://twitter.com/haruharu_0622x"
        >
          <FaTwitter size="1.4em" />
        </a>
      </li>
      <li className="mx-2">
        <a
          className="hover:underline hover:text-gray-300"
          href="https://github.com/haruki0622"
        >
          <FaGithub size="1.4em" />
        </a>
      </li>
      <li className="mx-2">
        <a
          className="hover:underline "
          href="https://next-js-portfolio-rouge.vercel.app/"
        >
          <Image
            src="/images/blog-logo.svg"
            alt="ブログロゴ画像"
            width={35}
            height={30}
            objectFit="contain"
          />
        </a>
      </li>
    </ul>
  );
}
