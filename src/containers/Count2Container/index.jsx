// 容器组件与ui组件整合
import React, { Component } from 'react';
//  引入redux中store必须从父亲传进来，不能用import导入
// 引入connect用于连接容器组件与ui组件
import { connect } from 'react-redux';
// 引入actionCreator,专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/action/create_action';

class Count extends Component {
  render() {
    return (
      <div className="count_box">
        <h2>容器组件和ui组件在一个jsx文件中</h2>
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
        <div style={{ color: 'red' }}>
          下方组件总人数为：{this.props.personLen}
        </div>
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

// export default connect((state) => ({ num: state }), {
//   jia: createIncrementAction,
//   jian: createDecrementAction,
//   jiaAsync: createIncrementAsyncAction,
// })(Count);

// store中合并状态后
export default connect(
  (state) => ({ num: state.he, personLen: state.rens.length }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);
