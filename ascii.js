window.onload = function(){
    "use strict";
    
let intervalAnim;
var textArea;

function start()
{
    
    textArea = document.getElementById("text-area").value;
    let textAreaField = document.getElementById("text-area");
    let toBeAnimated = document.getElementById("animation").value;
    if(textAreaField.value == "" && toBeAnimated =="Blank")
    {
        textAreaField.value  = "Please choose an animation or write your own animation here.";
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
    }
    else{
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        let animElements = textAreaField.value;
        let anim = animElements.split("=====\n");
       
            animate(anim, textAreaField);      
    }
}

function stop()
{
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(intervalAnim);
    document.getElementById("text-area").value = textArea;
}

function animationSelector()
{
    let val = document.getElementById("animation");
    let selected = val.value;
    document.getElementById("text-area").value = ANIMATIONS[selected];
   
}

function animate(a, b)
{
    
      var i = 0;
      intervalAnim =  setInterval(function(){
          let val = a[i];
          i = (i + 1) % a.length;
          
          b.value = val;
      }, 250);

}
function fontSelector()
{
    let size = document.getElementById("fontsize").value;
    

    if(size == "Tiny")
    {
        document.getElementById("text-area").style.fontSize = "7pt";
    }
    if(size == "Small")
    {
        document.getElementById("text-area").style.fontSize = "10pt";
    }
    if(size == "Medium")
    {
        document.getElementById("text-area").style.fontSize = "12pt";
    }
    if(size == "Large")
    {
        document.getElementById("text-area").style.fontSize = "16pt";
    }
    if(size == "Extra Large")
    {
        document.getElementById("text-area").style.fontSize = "24pt";
    }
    if(size == "XXL")
    {
        document.getElementById("text-area").style.fontSize = "32pt";
    }
}


}
