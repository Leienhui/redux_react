// 容器组件
import React, { Component } from 'react';
// 引入Count1的ui组件
import Count1UI from '../../components/Count1';

//  引入redux中store必须从父亲传进来，不能用import导入
// 引入connect用于连接容器组件与ui组件
import { connect } from 'react-redux';
// 引入actionCreator,专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/action/create_action';

// // 函数的返回值作为状态传递给UI组件，返回值必须是对象
// // 在调用mapStateToProps函数的时候，已经自动调用store.getState()了
// // 状态(用于给ui组件传递状态)
// function mapStateToProps(state) {
//   return { num: state };
// }
// // 操作状态的方法(用于给ui组件传递方法)
// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (data) => {
//       dispatch(createIncrementAction(data));
//     },
//     jian: (data) => {
//       dispatch(createDecrementAction(data));
//     },
//     jiaAsync: (data, time) => {
//       dispatch(createIncrementAsyncAction(data, time));
//     },
//   };
// }

// // connect()()生成容器组件
// // connect()的两个参数必须是函数，命名最好就这样
// export default connect(mapStateToProps, mapDispatchToProps)(Count1UI);

// 优化版本

// 一般写法
// export default connect(
//   (state) => ({ num: state }),
//   (dispatch) => ({
//     jia: (data) => {
//       dispatch(createIncrementAction(data));
//     },
//     jian: (data) => {
//       dispatch(createDecrementAction(data));
//     },
//     jiaAsync: (data, time) => {
//       dispatch(createIncrementAsyncAction(data, time));
//     },
//   })
// )(Count1UI);

// // 简洁版(因为react-redux可以自动分发（dispatch），所以下面的写法不会报错)
// export default connect((state) => ({ num: state }), {
//   jia: createIncrementAction,
//   jian: createDecrementAction,
//   jiaAsync: createIncrementAsyncAction,
// })(Count1UI);

// store中合并状态后
export default connect((state) => ({ num: state.he }), {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction,
})(Count1UI);
