
window.onload = function() {
  var currentTime = moment();

  displayDate(currentTime);
  displayRows(currentTime);

  document.querySelector('.container')
    .addEventListener('click', function(event){
      containerClick(event, currentBlocks);
    });
    setText(currentBlocks);
}

function displayDate(currentTime){
  document.getElementById('currentDay')
  .textContent = currentTime.format ('dddd, MMMM Do, YYYY, h:mm a');
}
