$(document).ready(function(){
    $("img").click(function(){
        var div = $(".anim");
        var img = $("img");
        img.animate({opacity:'1'});         
        div.animate({left: '25%'}, "fast");
        div.animate({width:'25%'}, "fast");
        div.animate({height:'auto'}, "fast");           
    });
});
$(document).ready(function(){
    $("img").click(function(){
        var div = $(".animdeux");    
        div.animate({right: '25%'}, "fast");
        div.animate({width:'25%'}, "fast");
        div.animate({height:'auto'}, "fast"); 
                             
    });    
});


