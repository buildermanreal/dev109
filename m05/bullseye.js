window.onload = function() {
  var table = 3; //Set default after loading
}

function EnterNumber(){
var table = prompt("Enter a number between 0 and 10:", "0"); // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 2 
var msg = '<h2>Multiplication Table</h2>'; // Message

if (0 < i) {
  // Do multiplication 
  while (i < 11) { 
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
}
