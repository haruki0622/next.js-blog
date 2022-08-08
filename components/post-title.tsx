import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      className="text-2xl md:text-3xl lg:text-5xl font-bold lg:tracking-wide lg:leading-relaxed  mb-4 text-center lg:mt-20"
    >
      {children}
    </h1>
  );
};

export default PostTitle;
