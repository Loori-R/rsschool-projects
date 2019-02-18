import React, { Component } from 'react'
import uniqid from 'uniqid';

class Students extends Component {
  render() {
    const { studentsInfo } = this.props
    const students = _.map(studentsInfo, (item, studName) => {
      return (
        <td key={uniqid('student-')}><a href={item.link} target="_blank">{studName}</a></td>
      )
    })
    return students
  }
}

export default Students