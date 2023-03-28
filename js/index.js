// Drawing a pseudo-random number
var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

// Chaning dice image
document.querySelector(".p1 img").setAttribute("src", "assets/" + player1 + ".png");
document.querySelector(".p2 img").setAttribute("src", "assets/" + player2 + ".png");

// Updating result
if(player1 > player2) {
    document.querySelector(".heading").textContent = "Player 1 Wins!";
}
else if(player1 < player2) {
    document.querySelector(".heading").textContent = "Player 2 Wins!";
}
else {
    document.querySelector(".heading").textContent = "Let's call it a draw!";
}