import React from 'react'
import "./FloatingDiv.css"

function FlotingDiv({image,tx1,tx2}) {
  return (
    <div className='floatingDiv'>
        <img src={image} alt=""/>
        <span>
            {tx1}
            <br/>
            {tx2}
        </span>
    </div>
  )
}

export default FlotingDiv