// Products function
    
let ProductsObject = [
    {
        image : "images/Cameras.jpg" ,
        describtion:"ANNKE 3K Lite Security Camera System Outdoor with AI Human/Vehicle Detection, 8CH H.265+ DVR and 8 x 1920TVL 2MP IP66 Home CCTV Cameras, Smart Playback, Email Alert with Images, 1TB Hard Drive - E200" ,
        price : "$259",
    } ,

    {
        image : "images/Cameras2.jpg" ,
        describtion:"ANNKE 8CH H.265+ 3K Lite Surveillance Security Camera System with AI Human/Vehicle Detection, 4 x 1920TVL 2MP Wired CCTV IP66 Cameras for Indoor Outdoor Use, Remote Access, 1TB Hard Drive Included",
        price : "$185",
    },

    {
        image : "images/Cameras3.jpg" ,
        describtion:"REOLINK 4K Security Camera System, RLK16-800B8 8pcs H.265 PoE Wired with Person Vehicle Detection, 8MP/4K 16CH NVR with 4TB HDD for 24-7 Recording",
        price : "$959",
    },
    {
        image : "images/SimpleSafe1.jpg" ,
        describtion:"SimpliSafe 12 Piece Wireless Home Security System w/HD Camera - Optional 24/7 Professional Monitoring - No Contract - Compatible with Alexa and Google Assistant, White",
        price : "$199",
    },
    {
        image : "images/SimpleSafe2.jpg" ,
        describtion:"SimpliSafe 11 Piece Wireless Home Security System Gen 3 with Wireless Indoor HD Camera - Optional 24/7 Professional Monitoring - No Contract - Compatible with Alexa and Google Assistant,White",
        price : "$174",
    },
    {
        image : "images/Tolviviov.jpg" ,
        describtion:"tolviviov Alarm System for Home Security, DIY Door Alarm Security Systems, Smart App Alerts, 15Piece Kit, No Monthly fee, WiFi Alarm, Door Window Motion Sensor, for Home Security, and Kids Safety" ,
        price : "$139",
    },
    {
        image : "images/X-sense.jpg" ,
        describtion:"X-Sense Smart Home Security System, Wireless Security System 5-Piece Set, Supports Mobile App Alerts, Compatible with Alexa, Includes 1 Base Station, 2 Door Sensors, 1 Motion Sensor, 1 Keypad, AS05",
        price : "$49",
    },
    {
        image : "images/AOSU-3K.jpg" ,
        describtion:"AOSU 3K/5MP Solar Security Cameras Outdoor Wireless, Ultra HD Video Home Security System 4-Cam Kit with 166° Ultra Wide Angle, Cam-to-Cam Sync, Color Night Vision, Spotlight & Siren, No Monthly Fees",
        price : "$399",
    },
    {
        image : "images/Wireless-Home-Alarm.jpg" ,
        describtion:"Wireless Home Alarm System 9-Piece Kit, WiFi Alarm System for Home Security with Phone APP Alert (Alarm Siren, Keypad, Remote, Motion, and Door Sensors) for Home, Apartment, Work with Alexa",
        price : "$79",
    },

];

let procuctSection = document.getElementById("Products-section");
let divContainer = document.createElement("div");
divContainer.setAttribute("class" , "images");
procuctSection.appendChild(divContainer);


for (let i = 0; i < 9; i++) {

    let divImage = document.createElement("div");
    divImage.setAttribute("class" , "image");
    divImage.classList.add("col-12");
    divContainer.appendChild(divImage);

    let productImage = document.createElement("img");
    productImage.setAttribute("src" , `${ProductsObject[i].image}`)
    divImage.appendChild(productImage);

    let productDescribtion = document.createElement("p");
    productDescribtion.textContent = `${ProductsObject[i].describtion}`
    divImage.appendChild(productDescribtion);

    let productPrice = document.createElement("h3");
    productPrice.textContent = `${ProductsObject[i].price}`
    divImage.appendChild(productPrice);

    let buttonCart = document.createElement("button");
    buttonCart.textContent = "Add To Cart"
    buttonCart.classList.add("btn" , "btn-primary")
    divImage.appendChild(buttonCart);
}

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

    // section 1
    document.getElementById("section-1").classList.add("bg-dark");
    document.getElementById("sec1-head").classList.add("text-white");
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("image")[i].classList.add("bg-secondary");
    }


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

    // section-1
    document.getElementById("section-1").classList.remove("bg-dark");
    document.getElementById("sec1-head").classList.remove("text-white");
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("image")[i].classList.remove("bg-secondary");
    }

    // footer
    document.getElementById("page-footer").classList.remove("bg-black");
    document.getElementById("footer-content").classList.remove("text-white");
    document.getElementById("sub").classList.remove("text-white");
    document.getElementById("tiktok-icon").classList.remove("text-secondary");
    document.getElementById("tiktok-icon").classList.add("text-black");
});

// opens home page
document.getElementById("Home-page-link").addEventListener("click" , ()=>{
    window.open("index.html" , "_self");
})

// opens About us page
document.getElementById("About us-page-link").addEventListener("click" , ()=>{
    window.open("about us-page.html" , "_self");
})

// opens login page
document.getElementById("Login-page-link").addEventListener("click" , ()=>{
    window.open("register-page.html" , "_self");
})