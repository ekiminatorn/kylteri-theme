let scrollLoad = true;
let pageNumber = 2;
let URL = window.location.pathname;
let numbers = URL.replace(/[\D]/g, ''); //Strip the page number

if (numbers) {
    pageNumber = numbers;
    pageNumber++;
};

console.log("Page: " + pageNumber);

$(window).scroll(function () {
    if (scrollLoad && ($(document).height() - $(window).height()) - $(window).scrollTop() <= 800) {
        // fetch data when we are 800px above the document end

        scrollLoad = false; //Dont trigger the same ajax request multiple times.

        $.ajax({
            url: "/artikkelit/page/" + pageNumber + "/", success: function (result) {
                result = $(result).filter("#artikkelit-container");
                result = result[0].innerHTML;

                $("#artikkelit-container").append(result);

                scrollLoad = true;
                result = "";
                pageNumber++;
            }
        });

    }
});