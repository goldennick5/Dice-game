var arr = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
]

var size = arr.length;

var res1 = Math.floor(Math.random() * size);
var res2 = Math.floor(Math.random() * size);

if (res1 > res2) {
  document.getElementById('result').innerHTML = "Player 1 won :)";
} else if (res1 < res2) {
  document.getElementById('result').innerHTML = "Player 2 won :)";
} else {
  document.getElementById('result').innerHTML = "EQUAL!!! :)";
}

document.getElementById('img1').src = arr[res1];
document.getElementById('img2').src = arr[res2];




