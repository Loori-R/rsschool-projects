import React, { Component } from 'react'
import uniqid from 'uniqid';

class Status extends Component {
  render() {
    const { studentsInfo, param, task } = this.props;
    const status = _.map(studentsInfo, (hasTask) => {
      let statusCheck
      if (_.indexOf(hasTask.tasks, task) !== -1) { statusCheck = 'checked' }
      else { statusCheck = 'nohting' }
      return <td key={uniqid('checked-')} className={`status-check-${statusCheck} status-task-${param.status}`} title={param.status}></td>
    })
    return status
  }
}

export default Status