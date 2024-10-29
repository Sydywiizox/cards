const card = document.querySelectorAll(".card")
const body = document.querySelector("body")

card.forEach(el => {
    el.addEventListener("mousemove", e => {
        body.classList.add("darkened");

        let x = e.offsetX;
        let y = e.offsetY;

        let midCardWidth = el.offsetWidth / 2;
        let midCardHeight = el.offsetHeight / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        let glowX = (x / el.offsetWidth) * 100;
        let glowY = (y / el.offsetHeight) * 100;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;        
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(184, 196, 211), transparent)`;
    });

    el.addEventListener("mouseleave", () => {
        body.classList.remove("darkened");

        el.children[0].style.transform = `rotateX(0) rotateY(0)`;
        el.children[1].style.transform = `rotateX(0) rotateY(0)`;
        el.children[1].style.background = `radial-gradient(circle at 50% 50%, rgb(184, 196, 211), transparent)`;
    });
});