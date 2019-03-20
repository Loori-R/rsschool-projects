import React, { Component } from 'react'
import Select from 'react-select'
import './List.css'
import info from '../../../server/output.json'

class List extends Component {
  state = {
    local: localStorage.getItem("mentor") ? localStorage.getItem("mentor") : '',
    regexp: /\w+:\/\/github\.com\//,
    arrMentor: info.mentor_info,
    isDisabled: true,
  }
  render() {
    const { onChange } = this.props;
    const options = _.map(this.state.arrMentor, (item) => {
      const mentorNickname = item.GitHub.replace(this.state.regexp, "")
      return ({
        value: `${item.Name} ${item.Surname}`,
        label: `${mentorNickname}(${item.Name} ${item.Surname})`
      })
    })
    return (
      <div className='list-mentor-body'>
        <h2>Mentor list:</h2>
        <Select
          className='list-mentor-input'
          options={options}
          onChange={onChange}
          defaultInputValue={this.state.local}
        />
      </div>)
  }
}

export default List
