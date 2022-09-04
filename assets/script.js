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



