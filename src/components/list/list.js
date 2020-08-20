import React from 'react'
import './list.css'

import Item from '../list-item/list-item'

export default function(props) {
  return <ul className="List">
           {props.items.map((item, idx) => <Item key={idx} {...item}/>)}
         </ul>
}