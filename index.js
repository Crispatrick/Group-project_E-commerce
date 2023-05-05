function togglelogin(){
    var tog = document.getElementById("login");
    
    if (tog.style.display === "none") {
        tog.style.display = "flex";
    } else {
        tog.style.display = "none";
    }
}

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email == localStorage.getItem('semail') && password == localStorage.getItem('spass')) {
        
    } else {
        
    }
}