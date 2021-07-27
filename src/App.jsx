import React, { Component } from 'react';
import Count from './components/Count';
import Count1Container from './containers/Count1Container';
import Count2Container from './containers/Count2Container';
import Person from './containers/Person';
// 检测redux中状态的改变，如果状态改变，页面改变
export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        {/* 给容器组件传递store,将这个store放在App组件的父组件Provider中,就能自动匹配所有需要store的组件了，不需要一个一个写了 */}
        {/* <Count1Container store={store} /> */}
        <Count1Container />
        <Count2Container />
        <hr />
        <Person />
      </div>
    );
  }
}
