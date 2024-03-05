let coountEl = document.getElementById("count-el")
let saveEl = document.getAnimations("save-el")
let count = 0

function increment() {
    count = count + 1
    coountEl.textContent = count
}

function save() {
    let regStu = count += 1
    saveEl.textContent = regStu
    coountEl.textContent = 0
    count = 0
}