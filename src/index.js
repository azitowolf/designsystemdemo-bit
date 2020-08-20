import ReactDom from 'react-dom'
import React from 'react'
import List from './components/list/list'

function createItem(value) {
  const item = {
    value,
    selected: false,
    toggleSelection() {
      item.selected = !item.selected
      render()
    }
  }
  return item
}

const listState = {
  items: [
    createItem('Item 1'),
    createItem('Item 2'),
    createItem('Item 3'),
    createItem('Item 4'),
    createItem('Item 5'),
  ]
}

function render() {
  ReactDom.render(<List {...listState}/>, document.getElementById('app'))
}

render()