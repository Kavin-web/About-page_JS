const image = document.getElementById("img")
image.style.marginLeft = "25px"
image.style.width = "500px";
image.style.height = "500px";


let mee = "Hi, I am Kavin kumaar from chennai . I am Beginner Web Developer. Created some project are in my GITHUB account. My Dream  is Full Stack Web Developer in Freelencer."
const about = document.createElement("div")
about.innerHTML = "mee"
const form = document.getElementById("form")
form.append(mee)

form.style.color = "darkblue";
form.style.marginTop = "50px"
form.style.marginLeft = "100px"
form.style.fontFamily = "serif"
form.style.fontSize = "50px"
form.style.fontWeight = "500"


const link = document.getElementById("link")
link.style.color = "black"
link.style.marginBottom = "400px"
link.style.marginLeft = "80%"
link.style.fontSize = "25px"

const btn = document.getElementById("btn")
btn.style.marginTop = "50px"
btn.style.background = "grey"
btn.style.fontSize = "30px"
btn.style.fontFamily = "serif"
btn.style.fontWeight = "300px"

function hello(){
    alert("Welcome to kavin about page")
}

function kavin(){
    document.write("Welcome to kavin Family ")
}

const hellos = document.getElementById("btn")
hellos.addEventListener ("click",hello)
hellos.addEventListener ("click",kavin)
