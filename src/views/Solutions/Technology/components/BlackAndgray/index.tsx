type BlackAndgrayProps = {
  black: string
  gray: string
}
const BlackAndgray = ({ black, gray }: BlackAndgrayProps) => {
  return (
    <p className="text-rc45  mt-rc_15 leading-rc56">
      {black} <span className=" text-gray-999">{gray}</span>
    </p>
  )
}

export default BlackAndgray
