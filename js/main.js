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

let dspNone = (changee, changee1, changee2, changee3, changee4, changee5, changee6) => {
    changee = changee.style.display = 'none'
    changee1 = changee1.style.display = 'none'
    changee2 = changee2.style.display = 'none'
    changee3 = changee3.style.display = 'none'
    changee4 = changee4.style.display = 'none'
    changee5 = changee5.style.display = 'none'
    changee6 = changee6.style.display = 'block'
}

change1.addEventListener("click", () => dspNone(document.getElementById("exercice2"),document.getElementById("exercice3"),document.getElementById("exercice4"),document.getElementById("exercice5"),document.getElementById("exercice6"),document.getElementById("exercice7"),document.getElementById("marg")))
change2.addEventListener("click", () => dspNone(document.getElementById("marg"),document.getElementById("exercice3"),document.getElementById("exercice4"),document.getElementById("exercice5"),document.getElementById("exercice6"),document.getElementById("exercice7"),document.getElementById("exercice2")))
change3.addEventListener("click", () => dspNone(document.getElementById("exercice2"),document.getElementById("marg"),document.getElementById("exercice4"),document.getElementById("exercice5"),document.getElementById("exercice6"),document.getElementById("exercice7"),document.getElementById("exercice3")))
change4.addEventListener("click", () => dspNone(document.getElementById("exercice2"),document.getElementById("marg"),document.getElementById("exercice3"),document.getElementById("exercice5"),document.getElementById("exercice6"),document.getElementById("exercice7"),document.getElementById("exercice4")))
change5.addEventListener("click", () => dspNone(document.getElementById("exercice2"),document.getElementById("marg"),document.getElementById("exercice4"),document.getElementById("exercice3"),document.getElementById("exercice6"),document.getElementById("exercice7"),document.getElementById("exercice5")))
change6.addEventListener("click", () => dspNone(document.getElementById("exercice2"),document.getElementById("marg"),document.getElementById("exercice4"),document.getElementById("exercice5"),document.getElementById("exercice3"),document.getElementById("exercice7"),document.getElementById("exercice6")))


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
let addImg = `<img src="../img/58541.png" alt="">`
let eggs = document.getElementById("eggs")
let addEgs = document.getElementById('addEgs')
let plus2 = document.getElementById("plus2")


let bye = document.getElementById("delete")
let byee = document.getElementById("remove")

let addEggs = () => {
    addEgs.innerHTML += addImg
}

let removeEggs = () => {
    addEgs.removeChild(addEgs.lastChild)
}

let rmEggs = () => {
    addEgs.parentNode.removeChild(addEgs)
}



eggs.addEventListener("click", () => addEggs(), eggs.addEventListener("click", () => plus2.innerHTML++))
byee.addEventListener("click", () => removeEggs(), byee.addEventListener("click", () => plus2.innerHTML--))
bye.addEventListener("click", () => rmEggs(), bye.addEventListener("click", () => plus2.innerHTML = 0))

// exercice 6 //

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let am = document.getElementById("am")
let rs = document.getElementById("résultat")
let m = document.getElementById("choice");


let karay = () => {

    switch (m.value) {
        case '+':
            rs.innerHTML = parseInt(num1.value) + parseInt(num2.value)
            num1.value = ""
            num2.value = ""
            break;
        case '-':
            rs.innerHTML = parseInt(num1.value) - parseInt(num2.value)
            num1.value = ""
            num2.value = ""
            break;
        case '*':
            rs.innerHTML = parseInt(num1.value) * parseInt(num2.value)
            num1.value = ""
            num2.value = ""
            break;
        case '/':
            rs.innerHTML = parseInt(num1.value) / parseInt(num2.value)    
            num1.value = ""
            num2.value = ""
            break;
            default:
    }
}

am.addEventListener("click", () => karay())
