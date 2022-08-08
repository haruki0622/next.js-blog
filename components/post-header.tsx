import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-sm text-center mb-3 text-gray-500 lg:text-lg">
        <DateFormatter dateString={date} />
      </div>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>  
      <div className="mb-8 md:mb-16 sm:mx-0  relative h-[57vw] md:h-[28vw] lg:h-[37vw]">
        <CoverImage title={title} src={coverImage} width={900} height={450} />
      </div>
    </>
  );
};

export default PostHeader;
