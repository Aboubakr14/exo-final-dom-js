let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");
let change5 = document.getElementById("change5");
let change6 = document.getElementById("change6");
let change7 = document.getElementById("change7");

// exercice 1 //
document.getElementById("titr").textContent = 'Mon titre modifié';
document.getElementById("titr").style.color = 'blue';

let titre = document.getElementById("titr");

titre.classList.add("bg-dark")

// exercice 2 //
change1.addEventListener("click", () =>  document.getElementById("exercice2").style.display = "none")
change1.addEventListener("click", () =>  document.getElementById("marg").style.display = "block")
change2.addEventListener("click", () =>  document.getElementById("marg").style.display = "none")
change2.addEventListener("click", () =>  document.getElementById("exercice2").style.display = "block")
