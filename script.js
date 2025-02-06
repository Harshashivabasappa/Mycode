document.getElementById('professional').addEventListener('click', function () {
  document.getElementById('eventsSection').style.display = 'block';
  document.getElementById('timeTableSection').style.display = 'none';
  generateEventRows();
});

document.getElementById('students').addEventListener('click', function () {
  document.getElementById('eventsSection').style.display = 'none';
  document.getElementById('timeTableSection').style.display = 'block';
  generateTimeTable();
});

document.getElementById('addEventBtn').addEventListener('click', function () {
  addEventRow();
});

function generateEventRows() {
  const table = document.getElementById('eventTable');

  // Clear previous rows
  table.innerHTML = `
    <tr>
      <th>Sl.No</th>
      <th>Time</th>
      <th>Events</th>
      <th>Set Notification</th>
    </tr>`;

  for (let i = 1; i <= 8; i++) {
    addEventRow(i);
  }
}

function addEventRow(slNo = null) {
  const table = document.getElementById('eventTable');
  let row = table.insertRow();
  
  let cell1 = row.insertCell(0);
  cell1.textContent = slNo || table.rows.length - 1;

  let cell2 = row.insertCell(1);
  let timeInput = document.createElement('input');
  timeInput.type = 'text';
  timeInput.className = 'time-input';
  timeInput.placeholder = 'HH:MM';
  timeInput.addEventListener('input', formatTime);
  cell2.appendChild(timeInput);

  let cell3 = row.insertCell(2);
  let eventInput = document.createElement('input');
  eventInput.type = 'text';
  eventInput.className = 'event-input';
  eventInput.placeholder = 'Enter Event';
  cell3.appendChild(eventInput);

  let cell4 = row.insertCell(3);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  cell4.appendChild(checkbox);
}
document.getElementById('addEventBtn').addEventListener('click', function () {
  addEventRow();
});

function addEventRow() {
  const table = document.getElementById('eventTable');
  let row = table.insertRow();

  let cell1 = row.insertCell(0);
  cell1.textContent = table.rows.length - 1;

  let cell2 = row.insertCell(1);
  let timeInput = document.createElement('input');
  timeInput.type = 'text';
  timeInput.className = 'time-input';
  timeInput.placeholder = 'HH:MM';
  timeInput.addEventListener('input', formatTime);
  cell2.appendChild(timeInput);

  let cell3 = row.insertCell(2);
  let eventInput = document.createElement('input');
  eventInput.type = 'text';
  eventInput.className = 'event-input';
  eventInput.placeholder = 'Enter Event';
  cell3.appendChild(eventInput);

  let cell4 = row.insertCell(3);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  cell4.appendChild(checkbox);

  let cell5 = row.insertCell(4);
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function () {
    row.remove();
    updateRowNumbers();
  });
  cell5.appendChild(deleteBtn);
}

function updateRowNumbers() {
  const table = document.getElementById('eventTable');
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].textContent = i;
  }
}

function formatTime(event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, '');

  if (value.length >= 3) {
    let hours = parseInt(value.substring(0, 2), 10);
    let minutes = parseInt(value.substring(2, 4) || '00', 10);

    if (hours > 12) hours = 12;
    if (minutes > 59) minutes = 59;

    input.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}

function formatTime(event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, '');

  if (value.length >= 3) {
    let hours = parseInt(value.substring(0, 2), 10);
    let minutes = parseInt(value.substring(2, 4) || '00', 10);

    if (hours > 12) hours = 12;
    if (minutes > 59) minutes = 59;

    input.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}

function generateTimeTable() {
  const table = document.getElementById('timeTable');

  table.innerHTML = `
    <tr>
      <th>Day & Period</th>
      <th>1st Period</th>
      <th>2nd Period</th>
      <th>3rd Period</th>
    </tr>`;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for (let i = 0; i < days.length; i++) {
    let row = table.insertRow();
    
    let dayCell = row.insertCell(0);
    dayCell.textContent = days[i];

    for (let j = 1; j <= 3; j++) {
      let periodCell = row.insertCell(j);
      let periodInput = document.createElement('input');
      periodInput.type = 'text';
      periodInput.className = 'period-input';
      periodInput.placeholder = `Enter Subject`;
      periodCell.appendChild(periodInput);
    }
  }
}
