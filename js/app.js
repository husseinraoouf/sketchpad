$(document).ready(function() {
    opt = "color";
    grid();
    asd();
    $("#basic").click(function() {
        opt = 'basic';
        asd();
    });
    $("#fade").click(function() {
        opt = 'fade';
        asd();
    });
    $("#color").click(function() {
        opt = 'color';
        asd();
    });
    
});


function grid() {
    size = prompt("Select the grid");
    dim = 600/size
    $("style").empty();
    $("style").append("#sketch>div\{height:" + dim + "px;width:" + dim +"px;\}") 
    $("#sketch").empty();
    $div = "<div></div>";
    for (i=0;i<size*size;i++) {
        $("#sketch").append($div);
    }
}
function asd() {
    s = $("#sketch").html();
    $("#sketch").empty();
    $("#sketch").html(s)
    
    if (opt === "basic") {
            $("#sketch>div").hover(function() {
                $(this).after("<div class='black'></div>")
                $(this).remove();
            });
    } else if (opt === "fade") {
        $("#sketch>div").hover(function() {
            if ($(this).hasClass("black1")) {
                $(this).css("opacity", "+=0.1");
            }else {
                $(this).addClass("black1");
                $(this).css("opacity", "+=0.1");
            }
            
        });
    } else if (opt === "color") {
        $("#sketch>div").hover(function() {
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            
            $(this).removeAttr("style");
            $(this).removeAttr("class");
            $(this).css("background-color", "#"+randomColor);
        });
    }
}
