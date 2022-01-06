// Image 1


// switch(n) {
//     case 1:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
//     break;
//     case 2:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
//     break;
//     case 3:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
//       break;
//     case 4:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
//       break;
//     case 5:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
//       break;
//     case 6:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
//       break;
//   default:
//     break ;
// }

//image 1
var n = Math.floor(((Math.random()*6)+1));
var imgsource1="images/"+"dice"+n+ ".png"; // string concatenation
document.querySelectorAll("img")[0].setAttribute("src",imgsource1);  // set it as a string
// Image 2
var n1 = Math.floor(((Math.random()*6)+1));
var imgsource2="images/"+"dice"+n1+ ".png"; // string concatenation
document.querySelectorAll("img")[1].setAttribute("src",imgsource2);

// switch(n1) {
//     case 1:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
//     break;
//     case 2:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
//     break;
//     case 3:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
//       break;
//     case 4:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
//       break;
//     case 5:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
//       break;
//     case 6:
//     document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
//       break;
//   default:
//     break ;
// }

if(n>n1){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(n<n1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
