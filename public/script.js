const socket = io();

// ارسال داده‌ها از Control Panel
const form = document.getElementById("scoreForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const homeTeam = document.getElementById("homeTeam").value;
    const awayTeam = document.getElementById("awayTeam").value;
    const homeScore = parseInt(document.getElementById("homeScore").value);
    const awayScore = parseInt(document.getElementById("awayScore").value);

    socket.emit("updateScore", { homeTeam, awayTeam, homeScore, awayScore });
  });
}

// دریافت داده‌ها در Scoreboard
socket.on("scoreUpdate", (data) => {
  const home = document.querySelector(".team.home");
  const away = document.querySelector(".team.away");
  const scores = document.querySelectorAll(".score");

  if (home && away && scores) {
    home.textContent = `${data.homeTeam}`;
    away.textContent = `${data.awayTeam}`;
    scores[0].textContent = data.homeScore;
    scores[1].textContent = data.awayScore;
  }
});
