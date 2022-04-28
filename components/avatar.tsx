type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center lg:justify-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-lg">{name}</div>
    </div>
  )
}

export default Avatar
