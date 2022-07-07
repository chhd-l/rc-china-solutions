import DividerLeft from '../../DividerLeft'
import SupplyChainControlTower_UseCases_1 from '../../../assets/image/SupplyChainControlTower_UseCases_1.png'
import './index.less'

type MoudulUseCaseType = {
  spans: { start: string; span: string; a?: string }[]
  title?: string
  span?: string
}

const MoudulUseCase = ({ title, span, spans }: MoudulUseCaseType) => {
  return (
    <section className="MoudulUseCase bg-black text-white">
      <DividerLeft dividerColor="rgba(255, 255, 255, 0.2)">
        <h5 className="text-white">Use cases</h5>
      </DividerLeft>
      <div className="text-rc45 max-w-rc1000 leading-rc55 mt-rc20 mb-rc45">
        {title || 'With the Deloitte Supply Chain Control tower our customers are able to'}
        <span className="text-gray-999">
          {span || 'take fast, high quality decisions that mitigate risk and capture market opportunities.'}
        </span>
      </div>
      <div className="flex flex-wrap justify-between">
        {spans.map((item, idx) => (
          <div className="flex w-rc_47 text-rc17 mb-rc8 leading-rc32" key={idx}>
            <img className="mr-rc15 mt-rc10 h-rc22" src={SupplyChainControlTower_UseCases_1} alt="" />
            <div>
              <span className="font-bold">{item.start}</span>
              {item.span}
              <span className='underline cursor-pointer'>{item?.a}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoudulUseCase
