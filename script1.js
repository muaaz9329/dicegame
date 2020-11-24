
var a = Math.floor(Math.random() * 6) + 1;

if (a==1)
{
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(a==2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(a==3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(a==4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(a==5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if(a==6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
