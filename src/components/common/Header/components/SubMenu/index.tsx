import { useNavigate } from 'react-router-dom'
import { Current } from '../Menu'
import { resourcesData, solutionsData } from '../../../../../router/MenuData'

type SubMenuProps = {
  current: Current
  getCurrent: (key: Current) => void
  subMenuData: any[]
}

type Item = {
  label: string
  path: string
}

const SubMenu = ({ current, getCurrent, subMenuData }: SubMenuProps) => {
  const navigate = useNavigate()
  const renderMenuList = (data: typeof subMenuData) => {
    return (
      <>
        {data.map((item) => (
          <div key={item.title} className="ml-rc43">
            <div
              className=" text-gray-500 text-rc14 font-bold hover:text-black"
              onClick={(e) => {
                e.stopPropagation()
                navigate(item.path)
              }}
            >
              {item.title}
            </div>
            {item.list.map((child: Item) => (
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(child.path)
                  getCurrent('default')
                }}
                key={child.label}
                className=" text-gray-800 text-rc16 leading-rc36 cursor-pointer hover:text-black"
              >
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

export default SubMenu
