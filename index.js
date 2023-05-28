var randNo1=Math.random()*6;
randNo1= Math.round(randNo1)+1;

if(randNo1 === 1){
    document.querySelector(".img1").src="./images/dice1.png";
}
else if(randNo1 === 2){
    document.querySelector(".img1").src="./images/dice2.png";
}
else if(randNo1 === 3){
    document.querySelector(".img1").src="./images/dice3.png";
}
else if(randNo1 === 4){
    document.querySelector(".img1").src="./images/dice4.png";
}
else if(randNo1 === 5){
    document.querySelector(".img1").src="./images/dice5.png";
}
else{
    document.querySelector(".img1").src="./images/dice6.png";
}

var randNo2=Math.random()*6;
randNo2= Math.floor(randNo2)+1;
if(randNo2 === 1){
    document.querySelector(".img2").src="./images/dice1.png";
}
else if(randNo2 === 2){
    document.querySelector(".img2").src="./images/dice2.png";
}
else if(randNo2 === 3){
    document.querySelector(".img2").src="./images/dice3.png";
}
else if(randNo2 === 4){
    document.querySelector(".img2").src="./images/dice4.png";
}
else if(randNo2 === 5){
    document.querySelector(".img2").src="./images/dice5.png";
}
else{
    document.querySelector(".img2").src="./images/dice6.png";
}

if(randNo1===randNo2){
    document.querySelector("h1").textContent="DRAW!😉"
}
else if(randNo1>=randNo2){
    document.querySelector("h1").textContent="🏆PLAYER 1 WINS"
}
else{
    document.querySelector("h1").textContent="Player 2 wins🚩"
}