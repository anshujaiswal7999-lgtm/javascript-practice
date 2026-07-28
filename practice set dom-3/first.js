let newbutton =document.createElement("button");
newbutton.innerText = "click me!";
console.log(newbutton);
newbutton.style.color="white";
newbutton.style.backgroundColor="red";
let body=document.querySelector("body");
body.prepend(newbutton);