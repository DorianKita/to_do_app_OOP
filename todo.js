const btn = document.querySelector(".fa-toggle-off");
btn.addEventListener("click", (e) => {
    e.target.style = "display: none"
    btn2.style = "display: block"
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
})

const btn2 = document.querySelector(".fa-toggle-on");
btn2.addEventListener("click", (e) => {
    e.target.style = "display: none"
    btn.style = "display: block"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})