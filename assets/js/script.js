// When the user scrolls down 50px from the top of the document, resize the header's font size
// Comment out, as not needed, but may be useful in the future.
/*
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
*/

function changeMenu(x) {
    x.classList.toggle("change"); //Change the menu to a cross, and vice versa

    if (document.getElementById("navbar-links").style.visibility == "visible") {

        document.getElementById("navbar-links").style.opacity = "0";
        document.getElementById("navbar-links").style.visibility = "hidden";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1.00)";

        setTimeout(function () { document.getElementById("navbar-links").style.position = "absolute"; }, 0600);

    } else {

        document.getElementById("navbar-links").style.position = "relative";
        document.getElementById("navbar-links").style.opacity = "1";
        document.getElementById("navbar-links").style.visibility = "visible";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1.00)";

    }

}



//Move all images to the sidebar
$('.artikkeli-content .kg-width-full').each(function (i, obj) {

    let image = obj.outerHTML;
    $(image).appendTo($(".artikkeli-sivupalkki-images"));

    //$(obj).remove();


});


//Cut off excess words from excerpt in /artikkelit/
$('.artikkelit-excerpt').each(function (i, obj) {

    let text = obj.innerHTML;
    let maxLength = 180 // maximum number of characters to extract
    
    if (text.length > maxLength) {
        //trim the string to the maximum length
        let trimmedString = text.substr(0, maxLength);

        //re-trim if we are in the middle of a word and 
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        obj.innerHTML = trimmedString.concat("...");

    }


});
