import { NectarButton } from '../../../../components/common/NectarButton'
import EKG_3D_cube_animation from '../../../../assets/video/EKG-3D-cube-animation-5.mp4'
import logos_home_1_1 from '../../../../assets/image/logos-home-1-1.png'

export const ViewPortDesktop = () => {
  return (
    <div className="bg-gray-700 py-rc60  px-rc_7">
      <div className="flex flex-row items-start  flex-wrap lg:flex-nowrap">
        <div className=" text-white ">
          <strong className=" text-7vh">The Deloitte Digital Brain platform</strong>
          <div className=" text-rc36 font-light leading-rc60 w-4/6">
            Because planning impacts your <strong>P&L</strong> and the <strong>planet.</strong>
          </div>
          <div className=" text-rc18 font-light opacity-60 mt-rc33">
            Deloitte’s Digital Brain platform is helping global companies across industries transform
            <strong>supply chain, revenue, P&L planning, and decision-making</strong> for digital age volatility and
            complexity.
          </div>
          <NectarButton className="mt-rc50">Learn more</NectarButton>
        </div>
        <video className="w-rc691 h-rc479" loop autoPlay muted playsInline preload="auto">
          <source src={EKG_3D_cube_animation} type="video/mp4" />
        </video>
      </div>
      <p className=" text-center  text-white text-rc17 mt-rc_5">Trusted by leaders across industry verticals.</p>
      <img src={logos_home_1_1} alt="" className="h-rc50 w-rc1470 m-auto" />
    </div>
  )
}
