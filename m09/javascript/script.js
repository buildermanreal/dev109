var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events


event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var color = document.getElementById('color').value;
    var scale = document.getElementById('size').value;
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dot.style.height= scale;
    dot.style.width = scale;
    dot.style.background = color;
    document.body.appendChild(dot);
    //Color names and hexcodes BOTH work for changing the color!
    //Any number value can be used for scale, "px" MUST be added at the end of the number. Other units untested
  });

