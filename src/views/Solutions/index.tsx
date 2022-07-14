import { Input, Select } from 'antd'
import './index.less'
import { ManagementItem } from './modules/solutions'
import SolutionsLeft from '../../assets/image/SolutionsLeft.png'
import { UserSubmissionbody } from './modules/UserSubmisstion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Solutions = () => {
  const navigate = useNavigate()
  const [bodys, steBodys] = useState(ManagementItem)
  const [seachrOpen, steSeachrOpen] = useState(false)
  const [timer, setTimer] = useState<any>(null)

  const seachBodys = (val: string) => {
    steSeachrOpen(true)
    if (timer) {
      clearTimeout(timer)
    }
    setTimer(setTimeout(() => {
      let arr = ManagementItem.filter((str) => str.title.indexOf(val) !== -1)
      steBodys(arr)
      steSeachrOpen(false)
    }, 1000))
  }

  return (
    <div className="Solutions">
      <div className="header px-rc115 leading-rc55 letterSpacing-rc5">
        <span>Our solutions,</span> powered by the industry specific knowledge models.
      </div>
      <div className="headerInpput px-rc115">
        <Input
          onKeyDown={(e: any) => {
            if(e.keyCode === 13) {
              seachBodys(e.target.value)
            }
          }}
          onChange={(e) => seachBodys(e.target.value)}
          placeholder="Search by solution or user role"
        />
      </div>
      <div className={`Management px-rc115 pb-rc132 ${seachrOpen && 'opacity-40'}`}>
        {bodys.map((item, idx) => (
          <div className="mt-rc90" key={idx}>
            <div
              className={`cursor-pointer flex items-center justify-between Managementlable ${item.color}`}
              onClick={() => navigate(item.url)}
            >
              <span>{item.title}</span> <img src={SolutionsLeft} alt="" className="w-10" />
            </div>
            <div className="grid grid-cols-4 gap-4 flex items-center flex-wrap">
              {item.children.map((subitem, key) => (
                <div
                  key={key}
                  className="cursor-pointer flex flex-col ManagementItem justify-between"
                  onClick={() => navigate(subitem.url)}
                >
                  <div>
                    <img src={subitem.icon} alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <div>{subitem.span}</div>
                    <div className="ManagementItemPlan">{subitem.plan}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {!bodys.length && <div className="text-center text-rc18 text-gray-999 mt-rc90">No post found</div>}
      </div>
      <div className="py-rc150 px-rc325 solutionsFooter bg-white text-black text-rc48 leading-rc55 letterSpacing-rc5">
        <div className="text-gray-999">
          <span className="text-black">Imagine the power of Deloitte in your enterprise, </span>
          request a demo to highlight the capabilities that matter to you.
        </div>
        <div className="grid grid-cols-2 gap-8 my-rc35">
          <Input className="text-rc15" placeholder="(Company) Email" />
          <Input
            placeholder="___ ___ ___"
            className="inputPhont"
            addonBefore={
              <Select defaultValue="China (中国)" className="text-rc17">
                {UserSubmissionbody.map((item, idx) => (
                  <Select.Option key={idx} value={item.Code}>
                    {item.value}
                  </Select.Option>
                ))}
              </Select>
            }
          />
        </div>
        <div className="leading-normal bg-green00c178 font-bold text-white text-rc17 flex justify-center items-center rounded-full py-rc13 hover:opacity-90 transition-all mt-rc20">
          Talk to an expert
        </div>
      </div>
    </div>
  )
}

export default Solutions
