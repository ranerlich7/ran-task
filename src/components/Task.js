function Task({content, date}) {
  return (
    <div className="task">
        <h3>{content}</h3>
        <p>{date}</p>
    </div>
  )
}

export default Task