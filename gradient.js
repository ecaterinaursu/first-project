const body = document.querySelector("body")
const firstInput = document.querySelector(".first")
const secondInput = document.querySelector(".second")

const gradient = () => {
body.style.background =`linear-gradient(to right, ${firstInput.value}, ${secondInput.value})`
}

firstInput.addEventListener("input", gradient);
secondInput.addEventListener("input", gradient);