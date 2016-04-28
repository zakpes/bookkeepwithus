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

    })

})
