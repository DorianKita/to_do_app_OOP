
class Background {
    constructor() {
        this.darkMode = document.querySelector(".fa-toggle-off");
        this.lightMode = document.querySelector(".fa-toggle-on");
        this.wrapper = document.querySelector(".wrapper");
        this.wrapper.style.background = "rgb(255,255,255)";
        this.wrapper.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 1) 10%, rgba(255, 190, 255, 1) 50%, rgba(255, 255, 255, 1) 90%)";
    }

    blackMode = () => {
        this.darkMode.style = "display: none";
        this.lightMode.style = "display: block";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        this.wrapper.style.background = "rgb(0,0,0)";
        this.wrapper.style.background = "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(200,9,183,1) 50%, rgba(0,0,0,1) 90%)";
    }

    brightMode = () => {
        this.darkMode.style = "display: block";
        this.lightMode.style = "display: none";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        this.wrapper.style.background = "rgb(255,255,255)";
        this.wrapper.style.background = "linear-gradient(90deg, rgba(255, 255, 255, 1) 10%, rgba(255, 190, 255, 1) 50%, rgba(255, 255, 255, 1) 90%)";
    }
}

