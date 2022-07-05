const DividerLeft = (props: any) => {
    return <div className="flex items-center h-rc18" {...props?.ParentBox}>
    <div className="text-rc22 pr-rc20 tracking-rc7 mt-_rc7" {...props?.titleBox}>{props.children}</div>
    <div className="flex-1 h-rc1 divider" style={{backgroundColor: props?.SubBox?.backgroundColor}} {...props?.SubBox} />
  </div>
}

export default DividerLeft