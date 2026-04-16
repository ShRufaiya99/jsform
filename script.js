let toggle = document.getElementById("toggle");
let mainbox = document.getElementById("main-box");
console.log(toggle)

toggle.addEventListener("click", ()=>{
  mainbox.classList.toggle("hidden")
})


let h1 = document.querySelector("h1")
let style = document.querySelector("link")

h1.addEventListener("click",()=>{
 
  let result = style.getAttribute("href")
  console.log("style")
 
  if(result == "./darkstyle.css"){
    style.setAttribute("href", "./style.css")
  }else( style.setAttribute("href", "./darkstyle.css"))
})

let submit = document.querySelector(".btn")
let uname = document.querySelector(".uname")
let pass = document.querySelector(".pass")
let body = document.querySelector("body")
let error = document.querySelector(".error")

 console.log(submit)
  submit.addEventListener("click",(event)=>{
    event.preventDefault();

    let h2 = document.createElement("h2");
    h2.innerHTML= "kire"
    body.appendChild(h2)
    console.log(h2)

    if(!uname.value || !pass.value){
      uname.style.borderBottom = '4px solid red';
      pass.style.borderBottom = '4px solid red';
      error.innerHTML = "all fildes are required";
      error.style.color="red"
    }else{ 
      error.innerHTML=""
       console.log(uname.value, pass.value)
    }
})

