// variables used in project
var timeDisplayEl = $("#currentDay");



// Functions used in the app

// function to display time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);