var todoList = document.getElementsByTagName("LI");
var i;
for(i = 0; i < todoList.length; i++) {
  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "erase";
  button.appendChild(txt);
  
  todoList[i].appendChild(button);
}

var erase = document.getElementsByClassName("erase");
for(i = 0; i < erase.length; i++) {
  erase[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
var x =document.createElement("INPUT");
x.setAttribute("type", "checkbox");
list.addEventListener('click', function(event) {
  if(event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

function newTodo() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("add").value;
  var liText = document.createTextNode(inputValue);
  li.appendChild(liText);
  if(inputValue === "") {
    alert("No todo was entered.");
  }
  else {
    document.getElementById("ul").appendChild(li);
  }
  
  document.getElementById("add").value = ""
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
