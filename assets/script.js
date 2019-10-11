
$(document).ready(function(){

	// Display the current Date at the top of the page

	var date = moment().format('MMMM Do YYYY, h:mm:ss a');
	$("#date-display").text(date);

	// Load current functions from local storage
	function getEvents(i) {

			var inputID = '#' + i;
			var events = JSON.parse(localStorage.getItem([i]));
			if (events === null) {
				return;
			} else {
				$(inputID).attr("placeholder", events);
			}
		}

	function init() {
		for (var i = 1; i <= 9; i++) {
			getEvents(i);
		}

	}

	function buttonAction(buttonName, inputID, eventStorageTag){
			var newEvent = $(inputID).val();
			//  Verify there is data in the input field on click, of not return.
			if (newEvent){
				$(inputID).html(newEvent);
				$(inputID).css('background-color','silver');
				localStorage.setItem(eventStorageTag, JSON.stringify(newEvent));
			}
	}

	// Set each button to run the buttonAction function to write to local storage.
	$('button[name="1"]').click(function(event){
		buttonAction("1", "#1", "1");
	});

	$('button[name="1"]').dblclick(function() {
		localStorage.clear('1');
		$('#1').val('');
	});

	$('button[name="2"]').click(function(){
		buttonAction("2", "#2", "2");
	});

	$('button[name="2"]').dblclick(function() {
		localStorage.clear('2');
		$('#2').val('');
	});

	$('button[name="3"]').click(function(){
		buttonAction("3", "#3", "3");
	});

	$('button[name="3"]').dblclick(function() {
		localStorage.clear('3');
		$('#3').val('');
	});

	$('button[name="4"]').click(function(){
		buttonAction("4", "#4", "4");
	});

	$('button[name="4"]').dblclick(function() {
		localStorage.clear('4');
		$('#1').val('');
	});

	$('button[name="5"]').click(function(){
		buttonAction("5", "#5", "5");
	});

	$('button[name="5"]').dblclick(function() {
		localStorage.clear('5');
		$('#5').val('');
	});

	$('button[name="6"]').click(function(){
		buttonAction("6", "#6", "6");
	});

	$('button[name="6"]').dblclick(function() {
		localStorage.clear('6');
		$('#6').val('');
	});

	$('button[name="7"]').click(function(){
		buttonAction("7", "#7", "7");
	});

	$('button[name="7"]').dblclick(function() {
		localStorage.clear('7');
		$('#7').val('');
	});

	$('button[name="8"]').click(function(){
		buttonAction("8", "#8", "8");
	});

	$('button[name="8"]').dblclick(function() {
		localStorage.clear('8');
		$('#8').val('');
	});

	$('button[name="9"]').click(function(){
		buttonAction("9", "#9", "9");
	});

	$('button[name="9"]').dblclick(function() {
		localStorage.clear('9');
		$('#9').val('');
	});

	var hour = moment().hour();
	var check= moment(hour).isAfter(10);
	if (check === false){
		$('input[type="text"]').css('background-color','silver');
	}


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
				console.log("done");
		}

	}

	setInterval(function(){
		var date = moment().format('MMMM Do YYYY, h:mm:ss a');
		$("#date-display").text(date);

		var hour = moment().hour();
		console.log(hour);
		inputColor(hour);

	}, 1000);

// Grab any stored events from local storage

init();

});