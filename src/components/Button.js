import React from 'react'
import "./Button.css" 

const Button = ({text,type, func}) => {
  return (
    <div>
      <button className={type== "red" ? "red" : "default" } onClick={func}> 
        {text}
      </button>
    </div>
  )
}

export default Button
