import { NectarButton } from '../../../../components/common/NectarButton'

export const ViewPortDesktop = () => {
  return (
    <div className="py-rc60 px-rc58  bg-gray-700 flex flex-row">
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
        <NectarButton>Learn more</NectarButton>
      </div>
      <div className="w-rc864 h-rc793">
        <video
          loop
          src="https://o9solutions.com/wp-content/uploads/2021/08/EKG-3D-cube-animation-5.mp4"
          className="w-full h-full"
        ></video>
      </div>
    </div>
  )
}
