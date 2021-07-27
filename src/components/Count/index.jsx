import React, { Component } from 'react';
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store';
// 引入actionCreator,专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/action/create_action';

import './index.css';
export default class Count extends Component {
  // componentDidMount() {
  //   // 挂在完成后，检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  render() {
    return (
      <div className="count_box">
        <h3>当前求和为：{store.getState().he}</h3>
        <span>
          合并reducers后要取某一个reducer的值的获取方法，store.getState().reducer属性名
        </span>
        <h3>没有容器组件包裹获取不到状态值的改变</h3>
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
    // 通知rudux加store.dispatch({ type: '类型', data: value })
    // store.dispatch({ type: 'increment', data: value * 1 });

    // 用creactAction
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNum;
    // store.dispatch({ type: 'decrement', data: value * 1 });
    store.dispatch(createDecrementAction(value * 1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNum;
    if (store.getState() % 2 !== 0) {
      // store.dispatch({ type: 'increment', data: value * 1 });
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNum;
    // setTimeout(() => {
    //   // store.dispatch({ type: 'increment', data: value * 1 });
    //   store.dispatch(createIncrementAction(value * 1));
    // });

    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  };
}
