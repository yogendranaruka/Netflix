let lang = document.querySelector("#lang");
let show1 = document.querySelector(".show1")

lang.addEventListener("click", () => {
    if (show1.style.display == "none") {
        show1.style.display = "block"
    } else {
        show1.style.display = "none"
    }
})


let firstplusdiv = document.querySelector("#plus1")
let firstplus = document.querySelector("#first .fa-plus")
let firstcross = document.querySelector("#first .fa-times")
let div1 = document.querySelector("#div1")

firstplusdiv.addEventListener("click", () => {
    if (div1.style.display == "none") {
        div1.style.display = "block";
        firstcross.style.display = "block";
        firstplus.style.display = "none";
    } else {
        div1.style.display = "none";
        firstcross.style.display = "none";
        firstplus.style.display = "block";
    }
})

let secondplusdiv = document.querySelector("#plus2")
let secondplus = document.querySelector("#second .fa-plus")
let secondcross = document.querySelector("#second .fa-times")
let div2 = document.querySelector("#div2")

secondplusdiv.addEventListener("click", () => {
    if (div2.style.display == "none") {
        div2.style.display = "block";
        secondcross.style.display = "block";
        secondplus.style.display = "none";
    } else {
        div2.style.display = "none";
        secondcross.style.display = "none";
        secondplus.style.display = "block";
    }
})

let thirdplusdiv = document.querySelector("#plus3")
let thirdplus = document.querySelector("#third .fa-plus")
let thirdcross = document.querySelector("#third .fa-times")
let div3 = document.querySelector("#div3")

thirdplusdiv.addEventListener("click", () => {
    if (div3.style.display == "none") {
        div3.style.display = "block";
        thirdcross.style.display = "block";
        thirdplus.style.display = "none";
    } else {
        div3.style.display = "none";
        thirdcross.style.display = "none";
        thirdplus.style.display = "block";
    }
})

let fourthplusdiv = document.querySelector("#plus4")
let fourthplus = document.querySelector("#fourth .fa-plus")
let fourthcross = document.querySelector("#fourth .fa-times")
let div4 = document.querySelector("#div4")

fourthplusdiv.addEventListener("click", () => {
    if (div4.style.display == "none") {
        div4.style.display = "block";
        fourthcross.style.display = "block";
        fourthplus.style.display = "none";
    } else {
        div4.style.display = "none";
        fourthcross.style.display = "none";
        fourthplus.style.display = "block";
    }
})

let fifthplusdiv = document.querySelector("#plus5")
let fifthplus = document.querySelector("#fifth .fa-plus")
let fifthcross = document.querySelector("#fifth .fa-times")
let div5 = document.querySelector("#div5")

fifthplusdiv.addEventListener("click", () => {
    if (div5.style.display == "none") {
        div5.style.display = "block";
        fifthcross.style.display = "block";
        fifthplus.style.display = "none";
    } else {
        div5.style.display = "none";
        fifthcross.style.display = "none";
        fifthplus.style.display = "block";
    }
})

let sixthplusdiv = document.querySelector("#plus6")
let sixthplus = document.querySelector("#sixth .fa-plus")
let sixthcross = document.querySelector("#sixth .fa-times")
let div6 = document.querySelector("#div6")

sixthplusdiv.addEventListener("click", () => {
    if (div6.style.display == "none") {
        div6.style.display = "block";
        sixthcross.style.display = "block";
        sixthplus.style.display = "none";
    } else {
        div6.style.display = "none";
        sixthcross.style.display = "none";
        sixthplus.style.display = "block";
    }
})


