import React from 'react'


const Button = (props) => {

    return(
      <div>
        <button type='button' onClick={props.listUpdate}>Add Item</button>
      </div>
    )
  }

  export default Button;