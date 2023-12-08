////////////////////
// Owner : Chloe Nevin
// Date  : Dec 7
// From  : https://www.w3schools.com/
////////////////////
function myFunction(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// End Owner: Chloe Nevin

////////////////////
// Owner : Hannah Rivet
// Date  : Dec 7
// From  : https://www.w3schools.com/
////////////////////
function contactFunction() {
    alert("Thank you for submitting."+"\n"+"One of our associates will be in contact with you very soon. Have a good day!");
}
// End Owner: Hannah Rivet 


////////////////////
// Owner : Aysha Qureshi
// Date  : Dec 7
// From  : https://github.com/sponsors/miguelznunez
////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
// End Owner: Aysha Qureshi
