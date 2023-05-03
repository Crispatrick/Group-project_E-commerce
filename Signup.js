let fname;
let lname;

function submit(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;

    localStorage.setItem("fsname", fname);
    localStorage.setItem("lsname", lname);

    /* Debug
    console.log(fname);
    console.log(lname);
    console.log("testing");
     */
}
