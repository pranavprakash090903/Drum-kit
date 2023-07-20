var num1=document.querySelectorAll(".drum").length;
for(var i=0;i<num1;i++){
  //document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var but=this.innerHTML;

    makesound(but);
    webAnimation(but);

    });
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  webAnimation(event.key);
});

function makesound(key){
  switch (key){
    case "w":
       var yo= new Audio("sounds/crash.mp3");
       yo.play();
    break;
    case "a":
       var yo= new Audio("sounds/kick-bass.mp3");
       yo.play();
    break;
    case "s":
       var yo= new Audio("sounds/snare.mp3");
       yo.play();
    break;
    case "d":
       var yo= new Audio("sounds/tom-1.mp3");
       yo.play();
    break;
    case "j":
       var yo= new Audio("sounds/tom-2.mp3");
       yo.play();
    break;
    case "k":
       var yo= new Audio("sounds/tom-3.mp3");
       yo.play();
    break;
    case "l":
       var yo= new Audio("sounds/tom-4.mp3");
       yo.play();
    break;
    default : console.log(key);
}
}
function webAnimation(currentKey){
  var ruro=document.querySelector("."+currentKey);
  ruro.classList.add("pressed");
  const myTimeout = setTimeout(function(){
    ruro.classList.remove("pressed");
  }, 100);
}
//document.addEventListener("keypress",function(event){
  //console.log(event);
//});
