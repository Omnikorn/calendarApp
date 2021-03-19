var timeDisplayEl = $("#currentDay")
var timeBlockEl = document.querySelectorAll(".time-block")
// var eventEl9 = $("#event_input9")
// var eventEl10 = $("#event_input10")
// var eventEl11 = $("#event_input11")
// var saveEl9 = $("#save_button9")
// var saveEl10 = $("#save_button10")
// var saveEl11 = $("#save_button11")


$(".saveBtn").on("click", function () {
	var timeSelected = $(this).parent().attr("id"); 
    var entry = $(this).siblings(".description").val();
	console.log(timeSelected, entry)
	console.log("Clicked")
    localStorage.setItem(timeSelected, entry);
})

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// functions

function displayTime() {
    
	var rightNow = moment().format(
		"MMM DD, YYYY [at] hh:mm:ss a"
	)
	timeDisplayEl.text(rightNow)
	var hour = moment().format("H")
	console.log("current hour::" + hour)
	for (i = 0; i < timeBlockEl.length; i++) {
		// console.log(timeBlockEl[i]);
		var backEL = parseInt(timeBlockEl[i].attr('id'))
		console.log(typeof backEL)
		if (backEL < hour) {
			timeBlockEl[i].setAttribute(
				"style",
				"background-color: yellow"
			)
		} else if (backEL == hour) {
			console.log("current hour")
			timeBlockEl[i].setAttribute(
				"style",
				"background-color: purple"
			)
		} else if (backEL > hour) {
			timeBlockEl[i].setAttribute(
				"style",
				"background-color: red"
			)
		}
	}

    $(".time-block").each(function(){
        var entryHour = parseInt($(this).attr('id'));
        if(entryHour < hour){
            $(this).addClass("past")
        } else if (entryHour === hour){

        }else {

        }
    })
	// write9();
	// write10();
	// write11();
}

setInterval(displayTime, 1000)


// function submit9(event){
//     event.preventDefault();
//     var nameOfEvent=eventEl9.value.trim();
//     console.log(nameOfEvent);
//     localStorage.setItem("levent9",JSON.stringify(nameOfEvent));

// }

// function submit10(event){
//     event.preventDefault();
//     var nameOfEvent=eventEl10.value.trim();
//     console.log(nameOfEvent);
//     localStorage.setItem("levent10",JSON.stringify(nameOfEvent));

// }

// function submit11(event){
//     event.preventDefault();
//     var nameOfEvent=eventEl11.value.trim();
//     console.log(nameOfEvent);
//     localStorage.setItem("levent11",JSON.stringify(nameOfEvent));

// }

// function write9(){
//     var writeEvent=JSON.parse(localStorage.getItem("levent9"));
//     text9.text=(writeEvent);
// }

// function write10(){
//     var writeEvent=JSON.parse(localStorage.getItem("levent10"));
//     text10.text=(writeEvent);
// }

// function write11(){
//     var writeEvent=JSON.parse(localStorage.getItem("levent11"));
//     text11.text=(writeEvent);
// }

// saveEl9.on("click",submit9);
// saveEl10.on("click",submit10);
// saveEl11.on("click",submit11);
