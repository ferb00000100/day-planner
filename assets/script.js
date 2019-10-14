
$(document).ready(function(){

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

	// Button action function to write events to local storage and add to input filed
	function buttonAction(buttonName, inputID, eventStorageTag){
			var newEvent = $(inputID).val();
			//  Verify there is data in the input field on click, of not return.
			if (newEvent){
				$(inputID).html(newEvent);
				localStorage.setItem(eventStorageTag, JSON.stringify(newEvent));
			}
	}

	// Set each button to run the buttonAction function to write to local storage.
	$('button[name="1"]').click(function(event){
		buttonAction("1", "#1", "1");
	});

	$('button[name="1"]').click(function(event){
		buttonAction("1", "#1", "1");
	});

	$('button[name="1"]').dblclick(function() {
		localStorage.removeItem('1');
		$('#1').val('add event');
	});

	$('button[name="2"]').click(function(){
		buttonAction("2", "#2", "2");
	});

	$('button[name="2"]').dblclick(function() {
		localStorage.removeItem('2');
		$('#2').val('add event');
	});

	$('button[name="3"]').click(function(){
		buttonAction("3", "#3", "3");
	});

	$('button[name="3"]').dblclick(function() {
		localStorage.removeItem('3');
		$('#3').val('add event');
	});

	$('button[name="4"]').click(function(){
		buttonAction("4", "#4", "4");
	});

	$('button[name="4"]').dblclick(function() {
		localStorage.removeItem('4');
		$('#4').val('add event');
	});

	$('button[name="5"]').click(function(){
		buttonAction("5", "#5", "5");
	});

	$('button[name="5"]').dblclick(function() {
		localStorage.removeItem('5');
		$('#5').val('add event');
	});

	$('button[name="6"]').click(function(){
		buttonAction("6", "#6", "6");
	});

	$('button[name="6"]').dblclick(function() {
		localStorage.removeItem('6');
		$('#6').val('add event');
	});

	$('button[name="7"]').click(function(){
		buttonAction("7", "#7", "7");
	});

	$('button[name="7"]').dblclick(function() {
		localStorage.removeItem('7');
		$('#7').val('add event');
	});

	$('button[name="8"]').click(function(){
		buttonAction("8", "#8", "8");
	});

	$('button[name="8"]').dblclick(function() {
		localStorage.removeItem('8');
		$('#8').val('add event');
	});

	$('button[name="9"]').click(function(){
		buttonAction("9", "#9", "9");
	});

	$('button[name="9"]').dblclick(function() {
		localStorage.removeItem('9');
		$('#9').val('add event');
	});


	// Function to change background colors every hour
	function inputColor(hour){

		switch (hour) {
			case 9:
				$('#1').css('background-color','silver');
				$('#2').css('background-color','#4E956D');
				$('#3').css('background-color','#4E956D');
				$('#4').css('background-color','#4E956D');
				$('#5').css('background-color','#4E956D');
				$('#6').css('background-color','#4E956D');
				$('#7').css('background-color','#4E956D');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 10:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','silver');
				$('#3').css('background-color','#4E956D');
				$('#4').css('background-color','#4E956D');
				$('#5').css('background-color','#4E956D');
				$('#6').css('background-color','#4E956D');
				$('#7').css('background-color','#4E956D');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 11:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','silver');
				$('#4').css('background-color','#4E956D');
				$('#5').css('background-color','#4E956D');
				$('#6').css('background-color','#4E956D');
				$('#7').css('background-color','#4E956D');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 12:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','silver');
				$('#5').css('background-color','#4E956D');
				$('#6').css('background-color','#4E956D');
				$('#7').css('background-color','#4E956D');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 13:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','#2C553E');
				$('#5').css('background-color','silver');
				$('#6').css('background-color','#4E956D');
				$('#7').css('background-color','#4E956D');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 14:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','#2C553E');
				$('#5').css('background-color','#2C553E');
				$('#6').css('background-color','silver');
				$('#7').css('background-color','#4E956D');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 15:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','#2C553E');
				$('#5').css('background-color','#2C553E');
				$('#6').css('background-color','#2C553E');
				$('#7').css('background-color','silver');
				$('#8').css('background-color','#4E956D');
				$('#9').css('background-color','#4E956D');
				break;
			case 16:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','#2C553E');
				$('#5').css('background-color','#2C553E');
				$('#6').css('background-color','#2C553E');
				$('#7').css('background-color','#2C553E');
				$('#8').css('background-color','silver');
				$('#9').css('background-color','#4E956D');
				break;
			case 17:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','#2C553E');
				$('#5').css('background-color','#2C553E');
				$('#6').css('background-color','#2C553E');
				$('#7').css('background-color','#2C553E');
				$('#8').css('background-color','#2C553E');
				$('#9').css('background-color','silver');
				break;
			default:
				$('#1').css('background-color','#2C553E');
				$('#2').css('background-color','#2C553E');
				$('#3').css('background-color','#2C553E');
				$('#4').css('background-color','#2C553E');
				$('#5').css('background-color','#2C553E');
				$('#6').css('background-color','#2C553E');
				$('#7').css('background-color','#2C553E');
				$('#8').css('background-color','#2C553E');
				$('#9').css('background-color','#2C553E');
				break;
		}

	}

	// Interval function to keep time upt to date
	setInterval(function(){
		var date = moment().format('MMMM Do YYYY, h:mm:ss a');
		$("#date-display").text(date);

		var hour = moment().hour();
		inputColor(hour);

	}, 1000);

// Grab any stored events from local storage

init();

});