import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/action/person_action';

class Person extends Component {
  render() {
    return (
      <div className="count_box">
        <h3>person组件</h3>
        <input
          type="text"
          ref={(c) => (this.name = c)}
          placeholder="请输入名字"
        />
        <input
          type="text"
          ref={(c) => (this.age = c)}
          placeholder="请输入年纪"
        />
        <button onClick={this.addPerson}>添加</button>

        <ul>
          {this.props.personInfo.map((item) => {
            return (
              <li key={item.id}>
                姓名:{item.name}------年级:{item.age}
              </li>
            );
          })}
        </ul>
        <div style={{ color: 'red' }}>上方组件的和为{this.props.count}</div>
      </div>
    );
  }
  addPerson = () => {
    const {
      name: { value: name },
      age: { value: age },
    } = this;
    const personObj = { id: nanoid(), name, age };
    this.props.addOnePerson(personObj);
  };
}

// export default connect((state) => ({ personInfo: state.person }), {
//   addOnePerson: createAddPersonAction,
// })(Person);
export default connect(
  (state) => ({ personInfo: state.rens, count: state.he }),
  {
    addOnePerson: createAddPersonAction,
  }
)(Person);
