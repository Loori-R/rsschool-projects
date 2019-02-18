import React, { Component } from 'react'
import Status from '../Status/Status'
import uniqid from 'uniqid';


class Tasks extends Component {
  state = {
    tasksArr: {}
  };
  //#ТАСКИ: имя, сатус, ссылка

  render() {
    const { studentsInfo, info } = this.props

    _.map(info.info_task, (item) => {
      const link = item.link
      const name = _.startCase(item.task)
      const status = _.kebabCase(item.status)
      this.state.tasksArr[name] = { status, link }
    })

    const tasks = _.map(this.state.tasksArr, (param, task) => {
      return (
        <tr key={uniqid('task-')}>
          <td className={param.status} title={param.status}><a href={param.link} target="_blank">{task}</a></td>
          <Status studentsInfo={studentsInfo} param={param} task={task} />
        </tr>
      )
    })
    return tasks
  }
}

export default Tasks