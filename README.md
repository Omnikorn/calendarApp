
This is a simple calendar/scheduling app build using a combination of bootstrap, jquery, momentJS and javascript. 

![calendar_app](\assests\pics\cal1.png)

As seen in the attached image the user is presented with a simple screen with a number of rows representing the working day in hour intervals. 
The middle section of each row represents the area where the user inputs the event for that hour of the day and once the save button is clicked these will remain there even after a page refresh. 
momentJS provides a running clock at the top of the screen. It is also used in the code to provide an “hour” number that is constantly compared against the “ids” of each time block. The background colours of the time block change according to their relation to the hour variable. A teal colour indicated events in the past, a lighter shade of teal represents the current hour block and finally a beige colour represent coming up events. 
