import React, { Component } from 'react';
import _ from 'lodash'
import './App.css'
import List from './ListMentor/List'
import TableMark from './Table/Table'
import info from '../../server/output.json'

class App extends Component {
  state = {
    active: localStorage.getItem("mentor"),
    select: false,
    students: []
  };

  firstStart = async () => {
    const pairs = await (_.filter(info.pairs, { 'interviewer': this.state.active }))
    const studentsList = await (_.map(pairs, (item) => { return item.student }))
    this.setState({
      select: true,
      students: studentsList
    })
  }

  handlerChange = async (e) => {
    if (e !== undefined) {
      if (e.value === this.state.active) { return }
      localStorage.setItem('mentor', `${e.value}`)
      await this.setState({ active: e.value })
    }
    if (!localStorage.getItem("mentor")) { return }
    const pairs = await (_.filter(info.pairs, { 'interviewer': this.state.active }))
    const studentsList = await (_.map(pairs, (item) => { return item.student }))
    this.setState({
      select: true,
      students: studentsList
    })
  }

  render() {
    if (this.state.students.length == 0) {
      this.handlerChange()
    }
    return (
      <div className='main-container'>
        <div className='select-mentor-body'>
          < List onChange={this.handlerChange} />
          <div className='selected-mentor-name'>{this.state.active}</div>
        </div>
        {(localStorage.getItem("mentor")) ? <TableMark studentsArr={this.state.students} /> : <h3>select mentor</h3>}
      </div>
    );
  }
}

export default App;