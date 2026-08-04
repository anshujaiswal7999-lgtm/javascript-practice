const url="https://catfact.ninja/fact"
let btn=document.querySelector("#btn");
let para=document.querySelector("#p")
const getfacts= async () => {
    console.log("Gettting data....");
    let responce=await fetch(url);
    console.log(responce);
    let data= await responce.json();
    para.innerText = data.fact;
    console.log("para");
}

btn.addEventListener("click",getfacts);