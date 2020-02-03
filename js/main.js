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
change1.addEventListener("click", () => document.getElementById("exercice2").style.display = "none")
change1.addEventListener("click", () => document.getElementById("marg").style.display = "block")
change1.addEventListener("click", () => document.getElementById("exercice3").style.display = "none")
change1.addEventListener("click", () => document.getElementById("exercice4").style.display = "none")
change2.addEventListener("click", () => document.getElementById("marg").style.display = "none")
change2.addEventListener("click", () => document.getElementById("exercice3").style.display = "none")
change2.addEventListener("click", () => document.getElementById("exercice4").style.display = "none")
change2.addEventListener("click", () => document.getElementById("exercice2").style.display = "block")
change3.addEventListener("click", () => document.getElementById("exercice4").style.display = "none")
change3.addEventListener("click", () => document.getElementById("marg").style.display = "none")
change3.addEventListener("click", () => document.getElementById("exercice2").style.display = "none")
change3.addEventListener("click", () => document.getElementById("exercice3").style.display = "block")
change4.addEventListener("click", () => document.getElementById("marg").style.display = "none")
change4.addEventListener("click", () => document.getElementById("exercice2").style.display = "none")
change4.addEventListener("click", () => document.getElementById("exercice3").style.display = "none")
change4.addEventListener("click", () => document.getElementById("exercice4").style.display = "block")
// exercice 3 //
let nom = document.getElementById("name");
let title = document.getElementById("title");
let bouton = document.getElementById("bouton");

let go = () => {
    title.innerHTML = nom.value;
    nom.value = "";
}

let goes = (e) => {
    if (e.keyCode === 13) {
        title.innerHTML = nom.value;
        nom.value = "";
    }
}

bouton.addEventListener("click", go);
nom.addEventListener("keypress", goes)

// exercice 4 //
let compt = document.getElementById("plus")
let change = document.getElementById("move")
let reset = document.getElementById("cpt")

let carré1 = document.getElementById("carré1")
let carré2 = document.getElementById("carré2")

change.addEventListener("click", () => compt.innerHTML++)


let changement = (carré1, carré2) => {

    if (carré2.classList == "d-none") {
        carré1.classList = 'd-none'
        carré2.classList = 'd-block'

    }
    else {
        carré2.classList = 'd-none'
        carré1.classList = 'd-block'
    }

}


change.addEventListener("click", () => changement(carré1, carré2))
reset.addEventListener("click", () => compt.innerHTML = 0)

// exercice 5 //
let addSpan = document.createElement("span")
let addImg = document.createElement("img")
let eggs = document.getElementById("eggs")
let addEgs = document.getElementById('addEgs')
let plus2 = document.getElementById("plus2")

addImg.src = 'https://image.flaticon.com/icons/png/128/58/58541.png'

let bye = document.getElementById("delete")
let byee = document.getElementById("remove")

let addEggs = (addImg, addEgs) => {
    addEgs.append(addImg)
}    

while (eggs.addEventListener("click",() => addEggs(addImg, addEgs), eggs.addEventListener("click", () => plus2.innerHTML++))) {
    addEggs(addImg,addEggs)

}
let removeEggs = (addImg, addEgs) => {
    addEgs.removeChild(addImg)
}



// eggs.addEventListener("click", () => addEggs(addImg, addEgs), eggs.addEventListener("click", () => plus2.innerHTML++))
byee.addEventListener("click", () => removeEggs(addImg, addEgs), byee.addEventListener("click", () => plus2.innerHTML--))


