var timeDisplayEl = $("#currentDay")
var timeBlockEl = document.querySelectorAll(".row")


// Button function
$(".saveBtn").on("click", function () {
	var timeSelected = $(this).parent().attr("id"); 
    var entry = $(this).siblings(".description").val();
	console.log(timeSelected, entry)
	console.log("Clicked")
    localStorage.setItem(timeSelected, entry);
})


// screen write function
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


// time display  and color change function 
function displayTime() {
    
	var rightNow = moment().format(
		"MMM DD, YYYY [at] hh:mm:ss a"
	)
	timeDisplayEl.text(rightNow)
	var hour = moment().format("H")
	console.log("current hour::" + hour)
	for (i = 0; i < timeBlockEl.length; i++) {
		console.log(timeBlockEl[i]);
		var backEL = parseInt(timeBlockEl[i].getAttribute("id"))
		console.log(typeof backEL)
		if (backEL < hour) {
			timeBlockEl[i].setAttribute (
				"style", "background-color: #60b4a4")
      } else if (backEL == hour) {

        
			console.log("current hour")
			timeBlockEl[i].setAttribute(
				"style",
				"background-color: #94d8ca"
			)
		} else if (backEL > hour) {
      
			timeBlockEl[i].setAttribute(
				"style",
				"background-color: #9eab91"
			)
		}
	}

    // $(".time-block").each(function(){
    //     var entryHour = parseInt($(this).attr('id'));
    //     if(entryHour < hour){
    //         $(this).addClass("past")
    //     } else if (entryHour === hour){

    //     }else {

    //     }
    // })

}

setInterval(displayTime, 1000)

