// Function runs on page load to display time and fecth objects from local storage
window.onload = function() {
  var currentBlocks = fetchCurrentBlocks;
  var currentTime = moment();

  displayDate(currentTime);
  displayRows(currentTime);

  document.querySelector('.container')
    .addEventListener('click', function(event){
      containerClick(event, currentBlocks);
    });
    setText(currentBlocks);
}
// displays current date and time for reference
function displayDate(currentTime){
  document.getElementById('currentDay')
  .textContent = currentTime.format ('dddd, MMMM Do, YYYY, h:mm a');
}
// returns saved objects from local storage
function fetchCurrentBlocks (){
  var currentBlocks = localstorage.getItem('timeblocksObj');
  return currentBlocks ? JSON.parse(currentBlocks) : [];
}

// functions that create the timeblocks as well as the textarea and saveBtn elements

function createRow (hourId){
  var timeblock = document.createElement('div');
  timeblock.classlist.add('row');
  timeblock.id = `timeblock-${hourId}`;
  return timeblock;
}

function createCol (element, colSize){
  const col = document.createElement('div'); 
  col.classlist.add(`col-${colSize}`, 'p-0');
  col.appendChild(element);
  return col;
}

function createHour (hour) {
  const hourCol = document.createElement('div');
  hourCol.classList.add('hour');
  hourCol.textContent = formatHour(hour);
  return hourCol;
}

function formatHour(hour) {
  const hourString = String(hour);
  return moment(hourString, 'h').format('hA');
}

function createText (hour, currentHour){
  const textArea = document.createElement('textarea');
  textArea.classList.add(getTextAreaBackgroundClass(hour, currentHour));
  return textArea;
}

function getTextAreaBackgroundClass(hour, currentHour);{
  return hour < currentHour ? 'past'
  : hour === currentHour ? 'present'
  : 'future';
}

function createSave(hour){
  const saveBtn = document.createElement ('button');
  saveBtn.classList.add('saveBtn');
  saveBtn.innerHTML = '<i class="fas fa-save"></i>';
  saveBtn.setAttribute('data-hour', hour);
  return saveBtn;
}






function displayTimeblockRows(currentTime) {
  const currentHour = currentTime.hour();
  for (let i = 9; i <= 17; i ++) {
    const timeblock = createRow(i);
    const hourCol = createCol(createHour(i), 1);
    const textArea = createCol(createText(i, currentHour), 10);
    const saveBtn = createCol(createSave(i), 1);
    appendTimeblockColumns(timeblock, hourCol, textArea, saveBtn);
    document.querySelector('.container').appendChild(timeblock);
  }
}

