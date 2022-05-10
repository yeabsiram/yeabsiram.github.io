window.onload = function(){
    "use strict";
    var intervalAnim;
    var textArea;
    var stop;
    var start;
    
    const animate = function(a,b){
        var i = 0;
        var speed = document.getElementById("turbo").checked;
        var animSpeed = 250;
        if(speed)
        {
              animSpeed = 50;
        }
        intervalAnim =  setInterval(function(){
            var val = a[i];
            i = (i + 1) % a.length;
            b.value = val;
        }, animSpeed);
    };
    
    start = function()
    {
        var message = "Please choose an animation or write your " +
                    "own animation here separated by 5" +
                    "equal signs and a newline('=====/n') for each frame.";
        textArea = document.getElementById("text-area").value;
        var textAreaField = document.getElementById("text-area");
        var toBeAnimated = document.getElementById("animation").value;
        if(textAreaField.value === "" && toBeAnimated ==="Blank")
        {
            textAreaField.value  = message;
            document.getElementById("stop").disabled = true;
            document.getElementById("start").disabled = false;
        }
        else{
            document.getElementById("stop").disabled = false;
            document.getElementById("start").disabled = true;
            var animElements = textAreaField.value;
            var anim = animElements.split("=====\n");
            animate(anim, textAreaField);  
        }
    };
   
    

    stop =  function(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        if(intervalAnim != null)
        {
            clearInterval(intervalAnim);
        }
       
        document.getElementById("text-area").value = textArea;
    };
    
    document.getElementById("turbo").onchange = function(){
        if(intervalAnim)
        {
            stop();
            start();
        }
        
    };
    document.getElementById("animation").onchange = function(){
        stop();
        var val = document.getElementById("animation");
        var selected = val.value;
        document.getElementById("text-area").value = ANIMATIONS[selected];
    };
    document.getElementById("fontsize").onchange = function(){
        var size = document.getElementById("fontsize").value;
        if(size === "Tiny")
        {
            document.getElementById("text-area").style.fontSize = "7pt";
        }
        if(size === "Small")
        {
            document.getElementById("text-area").style.fontSize = "10pt";
        }
        if(size === "Medium")
        {
            document.getElementById("text-area").style.fontSize = "12pt";
        }
        if(size === "Large")
        {
            document.getElementById("text-area").style.fontSize = "16pt";
        }
        if(size === "Extra Large")
        {
            document.getElementById("text-area").style.fontSize = "24pt";
        }
        if(size === "XXL")
        {
            document.getElementById("text-area").style.fontSize = "32pt";
        }
    };
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
};
