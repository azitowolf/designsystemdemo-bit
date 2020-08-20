import React from 'react'
import './button.css'

export default function({children, color = 'transparent', onClick}) {
  return <button type="button"
                 className={`List-Button ${color}`}
                 onClick={onClick}>{children}</button>
}