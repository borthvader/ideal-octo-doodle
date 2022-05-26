var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var daysOptions = moment().day();
var monthsOptions = moment().month();
var currentTime = moment().hour();
