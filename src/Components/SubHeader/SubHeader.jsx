const SubHeader = ({ko_name,en_name}) => {
  return(
    <div className="sub_header">
      <div className="ko_name">{ko_name}</div>
      <div className="en_name">{en_name}</div>
    </div>
  )
}

export default SubHeader;