// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar-logo-img").style.height = "55px";
        //document.getElementById("navbar-links-ul").style.fontSize = "20px";
    } else {
        document.getElementById("navbar-logo-img").style.height = "120px";
        //document.getElementById("navbar-links-ul").style.fontSize = "35px";
    }
}

function changeMenu(x) {
    x.classList.toggle("change"); //Change the menu to a cross, and vice versa

    if (document.getElementById("navbar-links").style.visibility == "visible") {

        document.getElementById("navbar-links").style.opacity = "0";
        document.getElementById("navbar-links").style.visibility = "hidden";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.00)";

        setTimeout(function(){ document.getElementById("navbar-links").style.position = "absolute"; }, 0600);

    } else {

        document.getElementById("navbar-links").style.position = "static";
        document.getElementById("navbar-links").style.opacity = "1";
        document.getElementById("navbar-links").style.visibility = "visible";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.61)";

    }

}