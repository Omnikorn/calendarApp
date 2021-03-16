// variables used in project
var timeDisplayEl = $("#currentDay");
var container=$("#container-fluid");
var saveEl=$(".save_button");



// Functions used in the app

// function to display time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);


// save button function
saveEl.on("click", function(event){
    var element = event.target;
    var test=element.getAttribute("data-id");
    console.log(test);

})

// input filed second attempt
// $(document).ready(function(){
//     $(".save_button").on("click", function(){
//         var dataId = $(this).attr("data-id");
//         alert("The data-id of clicked item is: " + dataId);
//     });
// });