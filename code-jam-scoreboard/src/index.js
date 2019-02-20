const users = _.map(usersRSS, (item) => {
  return JSON.parse(item)
});
const rss = JSON.parse(Rsschool[0])
const rssDemo = JSON.parse(rsschoolDemo[0])

const table = document.querySelector('table>tbody')
const tablePuzzle = document.querySelector('thead>tr')
let puzzleName = []

function crateTable(session) {
  table.innerHTML = ''
  tablePuzzle.innerHTML = '<td></td><td>Student</td>'
  puzzleName = _.map(session.puzzles, (item) => {
    return item.name
  });
  _.map(puzzleName, (item) => {
    const col = document.createElement('td')
    col.innerText = item
    tablePuzzle.appendChild(col)
  })
  const timeHead = document.createElement('td')
  timeHead.innerText = 'Total Time'
  tablePuzzle.appendChild(timeHead)
  for (let i = 0; i < users.length; i++) {
    const row = document.createElement('tr')
    let uid = users[i].uid
    let time = []
    let code = []
    const col = document.createElement('td')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'check-graph'

    col.innerText = users[i].displayName
    col.className = 'name'
    row.appendChild(checkbox)
    row.appendChild(col)
    table.appendChild(row)
    for (let i = 0; i < session.rounds.length; i++) {
      try {
        time.push(session.rounds[i].solutions[uid].time.$numberLong)
        code.push(session.rounds[i].solutions[uid].code)
      } catch {
        time.push(session.puzzles[i].options.timeLimit.$numberLong);
        code.push('-');
      }
    }
    const totalTime = _.reduce(time, function (sum, n) {
      return +sum + +n;
    }, 0);
    time.push(totalTime)
    for (let i = 0; i < time.length; i++) {
      const col = document.createElement('td')
      col.innerText = time[i]
      row.appendChild(col)
    }
  }

  const ctx = document.querySelector('#chart').getContext('2d');
  const chartConfig = {
    type: 'line',
    data: {
      labels: puzzleName,
      datasets: [],
    },
    options: {
      title: {
        display: true,
        text: 'Comparison of results',
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  const chart = new Chart(ctx, chartConfig);

  const colorSet = new Set();

  const generateRandomName = () => {
    const length = Math.floor(Math.random() * (8 - 4)) + 4;

    let name = '';

    for (let i = 0; i < length; i += 1) {
      name += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
    }
    return name;
  }

  const generateRandomColor = () => {
    let color = '#';

    for (let i = 0; i < 3; i += 1) {
      const colorComponent = Math.floor(Math.random() * 255);
      color += colorComponent.toString(16);
    }
    return color;
  }

  const addUserToChart = (config, setName, data_arr) => {
    const name = setName || generateRandomName();

    const data = data_arr;

    do {
      color = generateRandomColor();
    } while (colorSet.has(color));
    colorSet.add(color);

    const newUser = {
      label: name,
      data: data,
      backgroundColor: color,
      borderColor: color,
      borderWidth: 2,
      fill: false,
    }

    config.data.datasets.push(newUser);
    chart.update();
  }

  const removeUserFromChart = ({
    data: {
      datasets
    }
  }, name) => {
    if (name) {
      const names = datasets.map(user => user.label);
      const index = names.indexOf(name);

      if (index === -1) {
        return;
      }

      datasets.splice(index, 1);
    } else {
      datasets.pop();
    }

    chart.update();
  }
  let countCheck = 0
  table.onclick = (e) => {
    if (e.target.className !== 'check-graph') {
      return
    }
    if (countCheck === 10) {
      alert('Too much data selected!')
      if (e.target.checked) {
        return
      } else countCheck--
      e.target.checked = false
      return
    }
    const targetRow = e.target.parentElement.children
    const label = e.target.parentElement.children[1].textContent
    let data = []
    for (let i = 2; i < targetRow.length - 1; i++) {
      data.push(e.target.parentElement.children[i].textContent)
    }
    if (e.target.checked) {
      countCheck++
      addUserToChart(chartConfig, label, data);
    } else {
      countCheck--
      removeUserFromChart(chartConfig, label);
    }
  }
}
window.onload = () => {
  const form = document.querySelector("#sessions-form")
  const input = document.querySelector("#sessions-form>input:checked")
  if (input.value === 'rss') {
    crateTable(rss)
  }

  form.onchange = () => {
    const input = document.querySelector("#sessions-form>input:checked")
    if (input.value === 'rss') {
      crateTable(rss)
    }
    if (input.value === 'rssdemo') {
      crateTable(rssDemo)
    }
  }
}
