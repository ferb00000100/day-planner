$(document).ready(function() {

	// Display the current Date at the top of the page

	var date = moment().format('MMMM Do YYYY, h:mm:ss a');
	$("#date-display").text(date);

	// Load current events from local storage
	function getEvents(i) {
		console.log("i is " + i);
		var inputID = '#' + i;
		console.log("inputID is " + inputID);
		var events = JSON.parse(localStorage.getItem([i]));
		if (events === null) {
			return;
		} else {
			$(inputID).attr("placeholder", events);
		}
	}

	// call the get events function on page load
	function init() {
		for (var i = 1; i <= 9; i++) {
			getEvents(i);
		}
	}

	// function buttonAction(){
	// 	console.log("hi");
		// var newEvent = $(inputID).val();
		//  Verify there is data in the input field on click, of not return.
		// if (newEvent){
		// 	$(inputID).html(newEvent);
		// 	localStorage.setItem(eventStorageTag, JSON.stringify(newEvent));
		// }
	// }

	var times = [ "9am", "10am"];
	$('.btn').on("click", function(event) {
		event.preventDefault();
		console.log(this);
		// if(event.target) {
		// 	console.log(event.target.id);
			// buttonAction();
			// var time = times[event.target.parentElement.id];
			// console.log(time);
		// }
		// if(e.target.tagName=="BUTTON"){
		// 	alert('BUTTON CLICKED');
		// }
		// var index = $(this).parent().index();
		// console.log(event);
		// console.log(event.name.nodeValue);
	});

	init();
});