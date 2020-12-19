import React, { Component } from 'react';
import Content from './Component/Content';
import HeadingBar from './Component/HeadingBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <HeadingBar/>
        <Content/>
      </div>
    )
  }
}
