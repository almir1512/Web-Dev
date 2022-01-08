
var no = document.querySelectorAll(".drum").length;
for(var i=0;i<no;i++){

// button press detect
  document.querySelectorAll(".drum")[i].addEventListener("click",eventHandler);
  function eventHandler(){
    var char = this.innerHTML;
    makeSound(char);
    animateKey(char);
  }
}
// keypress detect
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animateKey(event.key);
});

//makesound function
function makeSound(key){
switch (key) {
  case "w":
    var audio= new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "a":
    audio= new Audio('sounds/kick-bass.mp3');
    audio.play();
      break;
      case "s":
      audio= new Audio('sounds/snare.mp3');
      audio.play();
        break;
        case "d":
        audio= new Audio('sounds/tom-1.mp3');
        audio.play();
          break;
          case "j":
          audio= new Audio('sounds/tom-2.mp3');
          audio.play();
            break;
            case "k":
            audio= new Audio('sounds/tom-3.mp3');
            audio.play();
              break;
              case "l":
              audio= new Audio('sounds/tom-4.mp3');
              audio.play();
                break;
            default:
            console.log(char);
}
}
function animateKey(currentKey){
  var Key= document.querySelector("."+currentKey);
  Key.classList.add("pressed");
  setTimeout(function(){
    Key.classList.remove("pressed");
  },100);

}
