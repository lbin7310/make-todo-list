import React from 'react'
import Right_todo from './Right-todo'

const Right_todos = (props) => (
  <div className="Right_todos">
    <div className='subject right'>
      Right_todos
        <span className="right_button">
          <button onClick={ (e) => {
            e.preventDefault();
            return props.contentMake(e)
          }
          } > + </button>  
        </span>
    </div>
    
    {props.todos.map( (val, i) => {
      return (
        <Right_todo todo={val} key={i} index={i}
          clickBox={props.clickBox}/>
        ) 
      }
    )}
    <input className="right-input" type="text" style={{display:"block"}} placeholder="새로해야 할 일" 
    onKeyPress={ (e)=> (props.keyContentMake(e.charCode))}
    onKeyDown={ (e) => (props.escKeyPress(e.keyCode))}></input>
  </div>
)

export default Right_todos