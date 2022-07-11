import './index.less'

type CaseStudiesCartProps = {
  path: string
  desc: string
}

const CaseStudiesCart = ({ path, desc }: CaseStudiesCartProps) => {
  return (
    <div className=" relative border border-gray-575757 w-full  cursor-pointer group text-white  ">
      <img src={path} alt="" className="  " height={186} />
      <div className="post-type-tag">Case Study</div>
      <p className=" py-rc30 px-rc20 text-rc20">{desc}</p>
    </div>
  )
}
export default CaseStudiesCart
