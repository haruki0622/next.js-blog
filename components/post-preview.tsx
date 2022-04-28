import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          width={400}
          height={260}
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:no-underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-gray-500 font-mono">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-4 text-gray-500">{excerpt}</p>
    </div>
  );
};

export default PostPreview;