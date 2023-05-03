// it gives me an error for a reason that the dom is not loaded yet, so I wrapped it inside an event listener to call when the dom is ready
document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("fname").innerHTML = localStorage.getItem('fsname');
    var myDiv = document.getElementById("lname").innerHTML = localStorage.getItem('lsname');
});