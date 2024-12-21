// changing background image function

const sec = document.getElementById("slide-1");
let current = 0;
function updateBackground() {
    sec.style.backgroundImage = `url(../images/image-${(current % 4)+1}.jpg)`;
    current++;
}
setInterval(updateBackground,  5000);

// arrow up function

let btnTop = document.getElementById("top-btn");

window.onscroll = function () {

if (document.documentElement.scrollTop > 700) {
btnTop.style.display = "block";
} else {
btnTop.style.display = "none";
}

}

btnTop.addEventListener("click", function () {
window.scroll({
top: 0,
left: 0,
behavior: 'smooth'
});
});


// dark mode function

let sunIcon = document.getElementById("sun-icon");
let moonIcon = document.getElementById("moon-icon");


// dark mode

sunIcon.addEventListener("click" , ()=>{
    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");

    // header
    document.getElementById("header").classList.add("bg-dark");
    moonIcon.classList.add("text-white");
    document.getElementById("header-text").classList.add("text-light");
    
    // navbar
    document.getElementById("navbar").classList.remove("bg-primary");
    document.getElementById("navbar").classList.add("bg-secondary");
    document.getElementById("search-input").classList.add("bg-secondary")

    // section 2
    document.getElementById("section-2").classList.add("bg-secondary");
    document.getElementById("sec2-head").classList.add("sec2-head-color");
    // footer
    document.getElementById("page-footer").classList.add("bg-black");
    document.getElementById("footer-content").classList.add("text-white");
    document.getElementById("sub").classList.add("text-white");
    document.getElementById("tiktok-icon").classList.remove("text-black");
    document.getElementById("tiktok-icon").classList.add("text-secondary");
});


// normal mode 

moonIcon.addEventListener("click" , ()=>{
    sunIcon.classList.remove("d-none");
    moonIcon.classList.add("d-none");

    // header
    document.getElementById("header").classList.remove("bg-dark");
    document.getElementById("header-text").classList.remove("text-light");

    // navbar
    document.getElementById("navbar").classList.add("bg-primary");
    document.getElementById("navbar").classList.remove("bg-secondary");
    document.getElementById("search-input").classList.remove("bg-secondary");

    // section 2
    document.getElementById("section-2").classList.remove("bg-secondary");
    document.getElementById("sec2-head").classList.remove("sec2-head-color");

    // footer
    document.getElementById("page-footer").classList.remove("bg-black");
    document.getElementById("footer-content").classList.remove("text-white");
    document.getElementById("sub").classList.remove("text-white");
    document.getElementById("tiktok-icon").classList.remove("text-secondary");
    document.getElementById("tiktok-icon").classList.add("text-black");
});

// open products page

document.getElementById("Products-page-link").addEventListener("click" , ()=>{
    window.open("products-page.html" , "_self");
})

// opens about us page

document.getElementById("About us-page-link").addEventListener("click" , ()=>{
    window.open("about us-page.html" , "_self");
})

document.getElementById("btn-about us").addEventListener("click" , ()=>{
    window.open("about us-page.html" , "_self");
})

// opens login page

document.getElementById("Login-page-link").addEventListener("click" , ()=>{
    window.open("register-page.html" , "_self");
})
