
var b = Math.floor(Math.random() * 6) + 1;

if (b==1)
{
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(b==2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(b==3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(b==4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(b==5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if(b==6){
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
