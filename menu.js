function myFunction() {
    var x = document.getElementById("hidmenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}