import React from 'react'

export default function InputControl(props) {
  return (
    <div className='input'>
        {props.label && <label>{props.label}</label>}
        <input  type="text"{...props}/>
    </div>
  )
}
