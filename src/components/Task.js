function Task({content, name}) {
  return (
    <div className="task">
        <h3>{content}</h3>
        <p>{name}</p>
    </div>
  )
}

export default Task