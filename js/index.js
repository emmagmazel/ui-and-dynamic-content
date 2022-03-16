// Save the reference to text-field into a variable. | <input type="text">
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
// Save the reference to paragraph for feedback | <p class="feedback"></p>

// Start function addItem.
//prevent default behaviour of form 
// Create list-item and store output in a variable.
// Check if user entered the value in input text-field.
// If so:
// Use textContent property on created list-item
// and assign it with the value of the text written in the text-field
// Append list item to unordered list.
// Clear a feedback-message.
// Clear the text-field.
// Put the cursor back to text-field  (textField.focus())
// TextField (save in variable)
// End if. 
// Otherwise:
// Print the message nothing entered in the paragraph "feedback"
// End otherwise.
// End function addItem.
// Register your function addItem for click event on button.


let li = document.getElementsByTagName("LI");
var i;
for (i = 0; i < li.length; i++) {
  var btn = document.createElement("btn");
  var txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  li[i].appendChild(btn);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("add your recipe");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
txt.addEventListener(newElement('btn'));
