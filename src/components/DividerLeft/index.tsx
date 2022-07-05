import { Property } from 'csstype'

type DividerLeftTyoe = {
  children: any
  dividerColor?: Property.BackgroundColor
}

const DividerLeft = (props: DividerLeftTyoe) => {
    return <div className="flex items-center h-rc18">
    <div className="text-rc22 pr-rc20 tracking-rc7 mt-_rc7">{props.children}</div>
    <div className="flex-1 h-rc1" style={{backgroundColor: props.dividerColor}} />
  </div>
}

export default DividerLeft