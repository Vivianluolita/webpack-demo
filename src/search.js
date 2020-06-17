'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
import logo from './image/1111.png'
class Search extends React.Component {
  render() {
    return <div className="search-text">
      search test 的 watch222233333
        <img src={logo}></img>
    </div>
  }
}
ReactDom.render(
  <Search />,
  document.getElementById("root")
);