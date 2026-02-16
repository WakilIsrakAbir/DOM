// const section = document.getElementsByTagName("section");

// console.log(section);


const allSection = document.querySelectorAll("section");

// console.log(allSection);
// for(const section of allSection) {
//     console.log(section);
//     section.style.backgroundColor = "lightGray";
//     section.style.padding = "50px";
//     section.style.marginBottom = "15px";
//     section.style.borderRadius = "16px";
// }


for(const section of allSection) {
    section.classList.add("section-card");
}