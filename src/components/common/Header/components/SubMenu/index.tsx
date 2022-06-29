import { Current } from '../Menu'
import { resourcesData, solutionsData } from './data'

type SubMenuProps = {
  current: Current
  getCurrent: (key: string) => void
}

const renderMenuList = (data: typeof solutionsData) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.title} className="mr-rc43">
          <div className=" text-gray-500 text-rc14 font-bold hover:text-black">{item.title}</div>
          {item.list.map((child) => (
            <div key={child.label} className=" text-gray-800 text-rc16 leading-rc36 cursor-pointer hover:text-black">
              {child.label}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

const MenuContent = {
  Solutions: renderMenuList(solutionsData),
  Resources: renderMenuList(resourcesData),
}
export const SubMenu = ({ current, getCurrent }: SubMenuProps) => {
  return (
    current && (
      <div
        className="w-full h-rc500 bg-white  fixed left-0  top-rc62 flex flex-row justify-center py-rc60"
        onMouseEnter={() => getCurrent(current)}
        onMouseLeave={() => getCurrent('')}
      >
        {MenuContent[current]}
      </div>
    )
  )
}
