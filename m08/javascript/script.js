function AddGrocery(){

// Get input from form text.
var input = document.getElementById('grocery').value;
  
// Create a new element and store it in a variable.  
var newEl = document.createElement('li');
  
// Create a text node and store it in a variable.
var newText = document.createTextNode(input);

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);
}

