import React from 'react'
import './list-item.css'

import Button from '../button/button'

export default function(props) {
  return <li className="List-Item">
           <div className="List-Item-Text">{props.value}</div>
           <Button color={props.selected ? 'red' : 'blue'} onClick={props.toggleSelection}>
             {props.selected ? 'Deselect' : 'Select'}
           </Button>
         </li>
}