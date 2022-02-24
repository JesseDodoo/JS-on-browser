let heading = document.querySelector("#heading");
let h2El = document.querySelector("#team-list");
let bodyKeyPress = document.querySelector("body");
let anchors = document.querySelectorAll('a')


anchors.forEach( (anchor)=> {
anchor.addEventListener("click", ()=> {
  document.querySelector(anchor.getAttribute('href')).classList.toggle('selected')
})

}) 


heading.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  body.classList.add("darkMode");
  console.log("click");
});

heading.addEventListener("mouseout", (e) => {
  let body = document.querySelector("body");
  body.classList.remove("darkMode");
});

h2El.addEventListener("mouseover", (e) => {
  h2El.textContent = "Hello Football Fans!";
});

bodyKeyPress.addEventListener("keypress", (e) => {
  let element = document.getElementById("new");
  let tag = document.createElement("p");
  let text = document.createTextNode(e.key);
  tag.appendChild(text);
  element.appendChild(tag);
  console.log(e);
});
