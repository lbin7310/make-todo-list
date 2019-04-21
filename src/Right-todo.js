import React from 'react'

const Right_todo = (props) => {

  return (
    <div className="rightTodos">
      <div className="right-todo" style={{color: props.todo.style}}
      onClick={ (e) => {
        console.log(props)
        return (props.clickBox(props.index))}}>
      {props.todo.check}{props.todo.content}</div>
    </div>
  )
}

export default Right_todo