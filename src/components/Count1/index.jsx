import React, { Component } from 'react';
export default class Count extends Component {
  render() {
    console.log('ui组件接收到的props', this.props);
    return (
      <div className="count_box">
        <h2>有容器组件包裹的ui组件</h2>
        <h3>当前求和为：{this.props.num}</h3>
        <select ref={(c) => (this.selectNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
  increment = () => {
    const { value } = this.selectNum;
    this.props.jia(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNum;
    this.props.jian(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNum;
    if (this.props.num % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNum;
    this.props.jiaAsync(value * 1, 500);
  };
}
