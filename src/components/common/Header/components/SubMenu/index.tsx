import { Current } from '../Menu'
import { resourcesData, solutionsData } from './data'

type SubMenuProps = {
  current: Current
  getCurrent: (key: Current) => void
}

const renderMenuList = (data: typeof solutionsData) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.title} className="ml-rc43">
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
  default: '',
  Solutions: renderMenuList(solutionsData),
  Resources: renderMenuList(resourcesData),
}
export const SubMenu = ({ current, getCurrent }: SubMenuProps) => {
  return (
    <>
      {current !== 'default' && (
        <div
          className="w-full h-rc500 bg-white  fixed z-10 left-0  top-rc62 flex flex-row justify-center py-rc60  animate__animated animate__fadeIn"
          onMouseEnter={() => getCurrent(current)}
          onMouseLeave={() => getCurrent('default')}
        >
          {MenuContent[current]}
        </div>
      )}
    </>
  )
}
