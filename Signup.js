let fname;
let lname;
let email;
let bday;
let gender;
let pass

function submit(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("el").value;
    bday = document.getElementById("bday").value;
    gender = document.getElementById("gender").value;
    pass = document.getElementById("psword").value;

    localStorage.setItem("fsname", fname);
    localStorage.setItem("lsname", lname);
    localStorage.setItem("semail", email);
    localStorage.setItem("sbday", bday);
    localStorage.setItem("sgender", gender);
    localStorage.setItem("spass", pass);

    /* Debug
    console.log(fname);
    console.log(lname);
    console.log("testing");
     */
}
