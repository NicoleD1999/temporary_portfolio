$('#lightDark').click(function() {
    $(document.body).toggleClass("darkMode")
    $("#darkNav").toggleClass("bg-dark")   
    $("#contactMe").toggleClass(".contactMeDark") 
    $(".service-cards").toggleClass("bg-dark")
    $(".carouselText").toggleClass("bg-dark")
     });