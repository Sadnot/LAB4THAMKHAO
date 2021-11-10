//bai2

$(document).ready(function(){
        var d=new Date();
    var ads="Khách hàng có ngày sinh trong tháng "+d.getMonth()+" sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";
    $("footer").append( "<div id='adscontainer'><span id='adstext'><h2>"+ads+"</h2></span></div>");

    var W = ($(window).width() - $('main').width())/2;
    if(W >= 200){
        adsVerEffect();
    }else{
        adsHorEffect();
    }
})
    
    function adsVerEffect(){
        $("div#adscontainer").addClass(["adsvercontainer","container"]);
        $("div#adscontainer").css({"width": W});
        // $("span#adstext").addClass(["adsvertext","adstext"]);
        $("#adstext").addClass(["adsvertext","adstext"]);
        $("span#adstext").css({"top": -$("#adscontainer").height()}); 
        $("span#adstext").animate({"top": -($("div#adscontainer").height() + $("span#text").height())},30000, function(){
            adsVerEffect();
        })
        

    }
    function adsHorEffect(){
        
        $("div#adscontainer").addClass(["adshorcontainer", "container"]);
        $("div#adscontainer").css({"left": $("main").position().left});
        $("div#adscontainer").css({"width": $("main").position().width});
        $("span#adstext").addClass(["adshortext","adstext"]);
        $("span#adstext").animate({"left": -($("div#adscontainer").width() + $("span#adstext").width())},30000,function(){ 
            adsHorEffect();
        })
        

    }


    //bai3
$(document).ready(function(){
    var headlineContent=[
        {"title":"Bánh flan sữa chua - sự kết hợp hoàn hảo","photo":"images/headline1.jpg"},
        {"title":"Sữa chua làm từ sữa dê - đậm đà hương vị khó quên","photo":"images/headline2.jpg"},
        {"title":"Thưởng thức sữa chua theo cách của bạn","photo":"images/headline3.jpg"}];
    });