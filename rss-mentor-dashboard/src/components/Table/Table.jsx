import React, { Component } from 'react'
import info from '../../../server/output.json'
import Tasks from './Tasks/Tasks'
import Students from './Students/Students'
import './Table.css'


class TableMark extends Component {
  render() {
    const { studentsArr } = this.props;

    const studentsInfo = {}

    _.forEach(studentsArr, (item) => {
      studentsInfo[item] = { tasks: [] }
      _.map(info.ready_tasks, (elem) => {
        const reg = new RegExp(item, 'i')
        if (reg.test(elem.student_github)) {
          studentsInfo[item].link = elem.student_github
          studentsInfo[item].tasks.push(_.startCase(elem.task))
        }
      })
    })

    return (
      <table className='table-mark-body' >
        <tbody>
          <tr>
            <td></td>
            <Students studentsInfo={studentsInfo} />
          </tr>
          <Tasks studentsInfo={studentsInfo} info={info} />
        </tbody>
      </table>
    )
  }
}

export default TableMark
