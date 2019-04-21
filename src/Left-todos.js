import React from 'react'
import Left_todo from './Left-todo'
// subjectMake={props.subjectMake}
const Left_todos = (props) => (
  <div className="Left_todos">
    <div className='subject left'>
      Left_todos
      <span className="left_button">
        <button onClick={ (e) => {
            // e.preventDefault()
            props.subjectMake()
          }
        } > + </button>
      </span>
    </div>
    <div></div>
    
    {props.leftSubjects.map( (val, i) => {
      return <Left_todo subject={val} key={i} onClickList={props.onClickList}/>
    })}

    <input className="left-input" type="text" placeholder="새로운 목록" 
    onKeyPress={ (e) => ( props.keyPressSubject(e.charCode))}
    onKeyDown={ (e) => (props.escPress(e.keyCode))} ></input>
  </div>
)

export default Left_todos

