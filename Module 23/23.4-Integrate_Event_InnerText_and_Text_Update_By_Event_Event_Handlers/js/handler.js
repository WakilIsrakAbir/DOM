document.getElementById("btn-update-title")
    .addEventListener("click",function() {
        // console.log("btn clecked")
        const pageTitleElement = document.getElementById("page-title");
        // console.log(pageTitleElement);
        pageTitleElement.innerText = "Updated page Title"
    });



document.getElementById("btn-login")
    .addEventListener("click", function() {
        const userInfoEl = document.getElementById("user-info");
        userInfoEl.innerText = "user logged in successfully"
    });


// handle input text

//step-1. set event listener
document.getElementById("btn-update")
    .addEventListener("click",function () {
        // step-2. get the text from the input field
        const nameInput = document.getElementById("input-name");
        const name = nameInput.value;
        console.log("name:", name);

        // step-3. set the name
        const nameP = document.getElementById("name");
        nameP.innerText = name;
    });