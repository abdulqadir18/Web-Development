
//Creating random number 1 between 1 and 6
var randomVariable1=Math.random();
randomVariable1=randomVariable1*6;
randomVariable1=Math.floor(randomVariable1+1);
// alert(randomVariable1);

//taking decision for player1
if(randomVariable1===1) document.querySelector(".img1").setAttribute("src","images/dice1.png");
else if(randomVariable1===2) document.querySelector(".img1").setAttribute("src","images/dice2.png");
else if(randomVariable1===3) document.querySelector(".img1").setAttribute("src","images/dice3.png");
else if(randomVariable1===4) document.querySelector(".img1").setAttribute("src","images/dice4.png");
else if(randomVariable1===5) document.querySelector(".img1").setAttribute("src","images/dice5.png");
else document.querySelector(".img1").setAttribute("src","images/dice6.png");


//Creating random number 1 between 1 and 6
var randomVariable2=Math.random();
randomVariable2=randomVariable2*6;
randomVariable2=Math.floor(randomVariable2+1);
// alert(randomVariable1);

//taking decision for player1
if(randomVariable2===1) document.querySelector(".img2").setAttribute("src","images/dice1.png");
else if(randomVariable2===2) document.querySelector(".img2").setAttribute("src","images/dice2.png");
else if(randomVariable2===3) document.querySelector(".img2").setAttribute("src","images/dice3.png");
else if(randomVariable2===4) document.querySelector(".img2").setAttribute("src","images/dice4.png");
else if(randomVariable2===5) document.querySelector(".img2").setAttribute("src","images/dice5.png");
else document.querySelector(".img2").setAttribute("src","images/dice6.png");


//deciding who won
if(randomVariable1===randomVariable2) document.querySelector("h1").textContent="Draw";
else if(randomVariable1>randomVariable2) document.querySelector("h1").textContent="⛳ Player1 Won";
else document.querySelector("h1").textContent="Player2 Won ⛳";

//refresh button
document.querySelector(".btn").addEventListener("click",function()
{
  location.reload();
});
