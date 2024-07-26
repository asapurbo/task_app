
const Members = ({info}) => {
    const {name, avatar} = info ?? {};

  return (
    <div className="checkbox-container">
        <img src={avatar} className="team-avater" />
        <p className="label">{name}</p>
    </div>
  )
}

export default Members