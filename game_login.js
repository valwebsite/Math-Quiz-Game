function adduser() {
    player_1 = document.getElementById("player1namein").value;
    player_2 = document.getElementById("player2namein").value;
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location = "file:///C:/Users/hitam/OneDrive/Desktop/Math%20game/game_page.html";
}