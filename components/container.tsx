import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto mt-10 lg:max-w-4xl">{children}</div>
}

export default Container
