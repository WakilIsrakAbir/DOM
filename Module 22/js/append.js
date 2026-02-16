// 1. parent node
const mainContainer = document.getElementById("main-container");

// 2. create child node 
const placesSection = document.createElement("section")

// create h1
const h1 = document.createElement("h1");
h1.innerText = "Place I want visit";
placesSection.appendChild(h1);

// 3. append placeSection to the mainContainer
mainContainer.appendChild(placesSection);





// easer to create html
const bookSection = document.createElement("section");

bookSection.innerHTML = `
<h1>Book I need to read<h1>
<ul>
    <li>Math</li>
    <li>Physics</li>
    <li>Chemistry</li>
</ul>
`

mainContainer.appendChild(bookSection);