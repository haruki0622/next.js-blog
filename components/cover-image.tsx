import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  width:number
  height:number
}

const CoverImage = ({ title, src, slug,width,height }: Props) => {
  const image = (
    <div>
      <Image src={src} width={width} height={height} objectFit="contain" alt={`Cover Image for ${title}`} className="rounded-xl"/>
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
