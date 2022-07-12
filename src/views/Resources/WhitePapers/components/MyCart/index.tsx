type MyCartProps = {
  path: string
  desc: string
}

const MyCart = ({ path, desc }: MyCartProps) => {
  return (
    <div className=" border border-gray-575757  w-rc299 h-full cursor-pointer group text-white overflow-hidden max-h-rc142">
      <img src={path} alt="" className=" transform group-hover:scale-150 transition-all duration-1000 " />
      <p className=" py-rc30 px-rc20 text-rc20">{desc}</p>
    </div>
  )
}
export default MyCart
