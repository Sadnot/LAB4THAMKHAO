$(document).ready(function() {
    var widthW = $(window).width();
    var heightW = $(window).height();
    $("#d1").html(widthW);
    $("#d2").html(heightW);
    var wdiv1 = $("#div1").width();
    var hdiv1 = $("#div1").height();
    $("#d3").html(wdiv1);
    $("#d4").html(hdiv1);
    var wdiv1 = $("#div1").innerWidth();
    var hdiv1 = $("#div1").innerHeight();
    $("#d5").html(wdiv1);
    $("#d6").html(hdiv1);
    var wdiv1 = $("#div1").outerWidth(false);
    var hdiv1 = $("#div1").outerHeight(false);
    $("#d7").html(wdiv1);
    $("#d8").html(hdiv1);
    var wdiv1 = $("#div1").outerWidth(true);
    var hdiv1 = $("#div1").outerHeight(true);
    $("#d9").html(wdiv1);
    $("#d10").html(hdiv1);
    var widthnotdiv = $(window).width() - $("#div1").width();
    var heightnotdiv = $(window).height() - $("#div1").height();
    $("#d11").html(widthnotdiv);
    $("#d12").html(heightnotdiv);
}); 


$(window).ready(function() {
    $("#div2").css({ "width": "50%", "height": "100px"});
    $("#div2").removeClass("box2");
    $("#div2").addClass("box3");
});