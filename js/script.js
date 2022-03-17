function myFunction() {  
var x = document.getElementById("myTopnav");
if (x.className === "nav-menu") {
    x.className += " responsive";
    } else {
        x.className = "nav-menu";
        }
    }