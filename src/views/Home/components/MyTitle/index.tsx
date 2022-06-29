import { PropsWithChildren } from 'react'

const MyTitle = ({ children }: PropsWithChildren<{}>) => {
  return <div className="text-am26 font-bold  text-left mt-am64 mb-2 ">{children}</div>
}

export default MyTitle
