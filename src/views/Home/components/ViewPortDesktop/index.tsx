import { NectarButton } from '../../../../components/common/NectarButton'
import { Hub_Landing_Banner } from '../../../../lib/home'

export const ViewPortDesktop = () => {
  return (
    <div className="bg-gray-700 py-rc60 px-rc58">
      <div className="flex flex-row items-start">
        <div className=" text-white ml-rc134">
          <strong className=" text-7vh">The :o9 Digital Brain platform</strong>
          <div className=" text-rc36 font-light leading-rc60">
            Because planning impacts your <strong>P&L</strong> and the <strong>planet.</strong>
          </div>
          <div className=" text-rc18 font-light opacity-60 mt-rc33">
            o9’s Digital Brain platform is helping global companies across industries transform
            <strong>supply chain, revenue, P&L planning, and decision-making</strong> for digital age volatility and
            complexity.
          </div>
          <NectarButton className="mt-rc50">Learn more</NectarButton>
        </div>
        <video loop src={Hub_Landing_Banner} className="w-rc691 h-rc479">
          111
        </video>
      </div>
      <p className=" text-center  text-white text-rc17">Trusted by leaders across industry verticals.</p>
    </div>
  )
}
