var randomnumber1 = Math.random();
randomnumber1= randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;
var randomimg1 = "dice"+randomnumber1+".png";
var imgsource1 =randomimg1;

document.querySelectorAll("img")[0].setAttribute("src", imgsource1);
var randomnumber2 = Math.random();
randomnumber2= randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;
var randomimg2 = "dice"+randomnumber2+".png";
var imgsource2 =randomimg2;
document.querySelectorAll("img")[1].setAttribute("src", imgsource2);
if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML = " Player 1 Wins!🔥";
else if (randomnumber2 > randomnumber1)
  document.querySelector("h1").innerHTML = "Player 2 Wins!🔥";
else
  document.querySelector("h1").innerHTML = "Try Again 🎲";
