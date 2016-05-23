$(function() {

    var $btnPrice = $(".btn-price");
    var $price = $(".price");
    var $btnPriceActive = $(".btn-price.active");
    $("#price-5, #price-6, #price-7, #price-8").hide();

    $btnPrice.click(function() {

        var $this = $(this);
        var $priceActive = $(".price.active");

        $btnPrice.removeClass("active");
        $this.addClass("active");
        $priceActive.removeClass("active").fadeOut(200, function() {
            $("#" + ($this.attr("rel"))).addClass("active").fadeIn(200);
        });

    });

    $(".navbar-toggle").click(function() {
        $(".bar-top").toggleClass("bar-top-x");
        $(".bar-mid").toggleClass("bar-mid-x");
        $(".bar-bot").toggleClass("bar-bot-x");
    });

    var $window = $(window);

    $window.scroll(function () {

        var $this = $(this);
        var wScroll = -($this.scrollTop() / 4 + 130);

        $("#blog-title-hero").css("background-position", "50% " + wScroll + "px");

    });

});
