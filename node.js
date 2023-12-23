const burgerMenu = document.querySelector(".burgerMenu")
const main = document.querySelector(".main")
const navMenu = document.querySelector("nav")

burgerMenu.addEventListener("mousedown", function () {
    if (navMenu.classList.contains("active") == true) {
        navMenu.style.display = "none"
        burgerMenu.innerHTML = "Меню"

    }

    if (navMenu.classList.contains("active") == false) {
        navMenu.style.display = "block"
        burgerMenu.innerHTML = "Закрыть меню"
    }
    navMenu.classList.toggle("active")
})
