import React from 'react'

const Left_todo = (props) => {

  return (
    <div>
      <div className='left_subject'>
        <div onClick={ (e) => props.onClickList(e)}>{props.subject.subject}</div>
      </div>
    </div>
  )
}

export default Left_todo