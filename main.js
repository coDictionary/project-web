// Scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
});

// Humberger

const hamburger = document.querySelector(".humberger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// Close Humberger

navMenu.addEventListener("click", ()=> {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
});