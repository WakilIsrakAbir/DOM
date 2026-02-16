//01. create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "New Born Footboller Here";

//02. find the parent who will add the child 
const playerList = document.getElementById("player-list");

//03. append the child to the parent 
playerList.appendChild(newChild);