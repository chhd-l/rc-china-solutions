import { Input } from 'antd'
import './index.less'
import { ManagementItem } from './modules/solutions'
import SolutionsLeft from '../../assets/image/SolutionsLeft.png'

const Solutions = () => {
  
  return (
    <div className="Solutions">
      <div className="header">
        <span>Our solutions,</span> powered by the industry specific knowledge models.
      </div>
      <div className="headerInpput">
        <Input placeholder="Search by solution or user role..." />
      </div>
      <div className="Management">
        {ManagementItem.map((item, idx) => (
          <div key={idx}>
            <div className={`flex items-center justify-between Managementlable ${item.color}`}>
              <span>{item.title}</span> <img src={SolutionsLeft} alt="" className="w-10" />
            </div>
            <div className="grid grid-cols-4 gap-4 flex items-center flex-wrap">
              {item.children.map((subitem, key) => (
                <div key={key} className="flex flex-col ManagementItem justify-between">
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
      </div>
    </div>
  )
}

export default Solutions
