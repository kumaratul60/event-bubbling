document.querySelector("#grandparent").addEventListener("click", (e) => {
  console.log("grandparent clicked");
  // e.stopPropagation()
});

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("parent clicked");
   e.stopPropagation()
},);

document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child clicked");
  e.stopPropagation()
},true);
