// it gives me an error for a reason that the dom is not loaded yet, so I wrapped it inside an event listener to call when the dom is ready
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fname").innerHTML = localStorage.getItem('fsname') + " " + localStorage.getItem('lsname');
    document.getElementById("mail").innerHTML = localStorage.getItem('semail');
    document.getElementById("bday").innerHTML = localStorage.getItem('sbday');
    document.getElementById("gender").innerHTML = localStorage.getItem('sgender');
});
console.log(localStorage.getItem('semail'));