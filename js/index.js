$(".theme-button").click(function() 
{
    var htmlElem = $("html");

    if(htmlElem.attr("data-bs-theme") === "light")
    {
        htmlElem.attr("data-bs-theme", "dark");

        $(".star").each(function (index, element) {
            var star = "star" + (index + 1);
            console.log(star);
            $(element).addClass(star);
        })

        $(".theme-button").text("Light mode");
        $(".theme-button").removeClass("btn-dark");
        $(".theme-button").addClass("btn-light");
        $("#moon").removeClass("hidden");
    }
    else
    {
        htmlElem.attr("data-bs-theme", "light");

        $(".star").each(function (index, element) {
            var star = "star" + (index + 1);
            console.log(star);
            $(element).removeClass(star);
        })

        $(".theme-button").text("Night mode");
        $(".theme-button").removeClass("btn-light");
        $(".theme-button").addClass("btn-dark");
        $("#moon").addClass("hidden");
   }
})
