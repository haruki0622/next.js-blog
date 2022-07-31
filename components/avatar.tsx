type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <img src={picture} className="w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-4" alt={name} />
      <div className="text-sm lg:text-lg">{name}</div>
    </div>
  )
}

export default Avatar
