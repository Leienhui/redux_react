// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import store from './redux/store';
import {Provider} from 'react-redux'
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route
} from 'react-router-dom';
import App from './App.jsx'
// import Hello from './component/Hello/Hello.jsx'
// import Welcome from './component/Welcome'
// 用于记录页面性能的
import reportWebVitals from './reportWebVitals';
// 渲染aPP组件到页面
// ReactDOM.render(
//   // <React.StrictMode></React.StrictMode>可以检查不合理的地方
//   <React.StrictMode>
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter> 
//   </React.StrictMode > ,
//   document.getElementById('root')
// );
// store.subscribe(()=>{
//   // 检测redux中状态的变化，只要变化，就调用render
//   ReactDOM.render(
//   // <React.StrictMode></React.StrictMode>可以检查不合理的地方
//   <React.StrictMode>
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter> 
//   </React.StrictMode > ,
//   document.getElementById('root')
// );
// })


  // 使用react-redux,不需要使用 store.subscribe，就能检测redux中状态的变化，就调用render
  ReactDOM.render(
    // 让app的后代组件都能接收store
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
reportWebVitals();