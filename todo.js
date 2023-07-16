const btn = document.querySelector(".fa-toggle-off");
const wrapperBgc = document.querySelector(".wrapper");
btn.addEventListener("click", (e) => {
    e.target.style = "display: none";
    btn2.style = "display: block";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    wrapperBgc.style.background = "rgb(0,0,0)";
    wrapperBgc.style.background = "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(134,9,200,1) 50%, rgba(0,0,0,1) 90%)";
})

const btn2 = document.querySelector(".fa-toggle-on");
btn2.addEventListener("click", (e) => {
    e.target.style = "display: none";
    btn.style = "display: block";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    wrapperBgc.style.background = "rgb(255, 255, 255)";
    wrapperBgc.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 1) 10%, rgba(255, 190, 255, 1) 50%, rgba(255, 255, 255, 1) 90%)";

})