function togglelogin(){
    var tog = document.getElementById("login");
    
    if (tog.style.display === "none") {
        tog.style.display = "flex";
    } else {
        tog.style.display = "none";
    }
}