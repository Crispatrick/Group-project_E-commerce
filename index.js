let slideshow; 
let bestSeller = ["Images/antonin-fels-OdqmOsUgNwk-unsplash.jpg", "Images/satyam-vk-FzpI5DF9Ghk-unsplash.jpg", "Images/vaporesso-M8CrCzlS78Y-unsplash.jpg"];

let jslide;
let juice = [  "Juice/342396072_797861421708580_3237842866571888086_n.jpg", "Juice/342350921_545162284448662_8230058651723249717_n.jpg","Juice/342261927_6213995858659350_8628335001630542226_n.jpg"]; 

let vslide;
let vape = ["Vape/344080135_907170933728702_4303318505126835992_n.jpg", "Vape/342233616_237089915567796_5825129120004923718_n.jpg", "Vape/342229938_5976320489112075_4270483449592294278_n.jpg"];
let currentIndex = 0;

var tog;
let logon = false;

document.addEventListener("DOMContentLoaded", function() {
    slideshow = document.getElementById("bestSeller");
    jslide = document.getElementById("juice");
    vslide = document.getElementById("vape");
    tog = document.getElementById("login");
});

function togglelogin(){
    if (tog.style.display == "flex") {
        tog.style.display = "none";
    } else {
        tog.style.display = "flex";
    }
}

function replacebtn(){
    let loginbtn1 = document.getElementById("loginbtn1");

    let profile = document.createElement("a");
    profile.href = "profile.html";    
    profile.style.position = "relative";
    profile.style.top = "5px"
    
    let pfp = document.createElement('img');
    pfp.src = "Images/pfp1.jpg";
    pfp.style.height = "30px";
    pfp.style.borderRadius = "50%";

    profile.appendChild(pfp);
    loginbtn1.replaceWith(profile);
}

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let hidden = document.getElementById("wrong");
    
    //* Done but it wont save in different areas, TODO email login
    if (email == localStorage.getItem('semail') && password == localStorage.getItem('spass')) {
        //debug console.log("testing");
        replacebtn();
        logon = true;

        tog.style.display = "none";
    } else {
        if (hidden.classList.contains("hidden")) {
            wrong.classList.toggle("hidden");
        } else {
        }
        //debug console.log("Shinji Crank That Soulja Boy");
    }
}

setInterval(function() {
    if (currentIndex < bestSeller.length) {
        
        slideshow.src = bestSeller[currentIndex];
        vslide.src = vape[currentIndex];
        jslide.src = juice[currentIndex];
        //I messed up, the transistion does not work because Im changing the source itself rather css, so this will not work
        //slideshow.style.transition = "background-image 2s ease-in-out";
        
        //debug console.log(bestSeller[currentIndex]);
        //debug console.log(currentIndex);

        currentIndex++;
        //debug console.log(currentIndex);
    }else{
        currentIndex = 0;

        slideshow.src = bestSeller[currentIndex];
        vslide.src = vape[currentIndex];
        jslide.src = juice[currentIndex];
    }

    console.log(currentIndex);
  }, 3000);

