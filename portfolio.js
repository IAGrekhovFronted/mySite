// ===============================Шарик===============================

const papa = document.querySelector('.DragAndRoll__pole')
let blFree, diffX, diffY, trObjX, trObjY

papa.addEventListener('mousedown', function (event) {
    x = event.pageX
    y = event.pageY
    let bl = event.target
    blFree = bl
    let trObj = getComputedStyle(bl).transform
    trObjX = parseInt(trObj.split(',')[4]) || 0
    trObjY = parseInt(trObj.split(',')[5]) || 0
    diffY = y - parseInt(blFree.style.top || 0)
    diffX = x - parseInt(blFree.style.left || 0)
})
papa.addEventListener('mouseup', function (event) {
    blFree = ''
})

papa.addEventListener('mousemove', function (e) {
    x = e.pageX - diffX + trObjX
    y = e.pageY - diffY + trObjY
    blFree.style.transform = `translate(${x}px, ${y}px)`
})

// ===============================Кулькулятор===============================
const NumberCalc = document.querySelector(".number")
const firstDisplayCalc = document.querySelector(".CalcPoleTwo")
const secondDisplayCalc = document.querySelector(".CalcPole")
const butReset = document.querySelector(".butReset")
const arrowCalc = [];

let resultNumber = ""

NumberCalc.addEventListener("click", function (e) {
    let obj = e.target
    let objInner = obj.innerHTML
    if (obj.classList.contains('symbol') == false & obj.classList.contains('butReset') == false) {
        firstDisplayCalc.value += objInner
    }
    if (obj.classList.contains('symbol') == true & obj.classList.contains('butReset') == false & secondDisplayCalc.value != "" & firstDisplayCalc.value != "") {
        resultNumber = eval(secondDisplayCalc.value + arrowCalc[0] + firstDisplayCalc.value)
        firstDisplayCalc.value = resultNumber
    }
    if (obj.classList.contains('symbol') == true & obj.classList.contains('butReset') == false & firstDisplayCalc.value != "") {
        arrowCalc[0] = objInner
        secondDisplayCalc.value = firstDisplayCalc.value
        firstDisplayCalc.value = ""
    }
    if (obj.classList.contains('symbol') == true & obj.classList.contains('butReset') == false & firstDisplayCalc.value == "") {
        arrowCalc[0] = objInner
    }
})

butReset.addEventListener("click", function () {
    resultNumber = "";
    firstDisplayCalc.value = ""
    secondDisplayCalc.value = ""
})
// ===========================Навигация Портфолио==========================
const portfolioNav = document.querySelector(".portfolio__Navigation")
const allItem = document.querySelectorAll(".portfolio__items")

portfolioNav.addEventListener("click", function (e) {
    const navObj = e.target
    const navObjClass = navObj.classList[1]

    for (n = 0; n < allItem.length; n++) {
        if (allItem[n].classList.contains(navObjClass)) {
            allItem[n].style.display = "block"
            allItem[n].style.opacity = "1"
        }
        if (allItem[n].classList.contains(navObjClass) == false) {

            allItem[n].style.opacity = "0"
            allItem[n].style.display = "none"
            // setTimeout(() => { BlockDeny(); }, 1000);
        }
    }
    if (navObjClass == "all") {
        for (n = 0; n < allItem.length; n++) {
            allItem[n].style.opacity = "1"
            allItem[n].style.display = "block"
        }
    }
})