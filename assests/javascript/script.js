// variables used in project
var timeDisplayEl = $("#currentDay");
var container=$("#container-fluid");
var saveEl=$(".save_button");
var eventEl=$(".event_input");
var displayEl=$("display")


// Functions used in the app

// function to display time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    var hour =moment().format("HH")
    console.log(hour);
    displayEvent();
  }
  setInterval(displayTime, 1000);


// save button function
saveEl.on("click", function(event){
    var element = event.target;
    var test=element.getAttribute("data-id");
    console.log(test);

})

function displayEvent (){
var eventText=eventEl.value.trim();
displayEl.text(eventText);
console.log(eventText);

}