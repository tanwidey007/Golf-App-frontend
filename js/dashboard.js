window.onload = function () {
  if (localStorage.getItem("loggedIn") !== "true") {
    location.href = "login.html";
  }

  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("userInfo").innerText = user.email;

  loadScores();
};

function loadScores() {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  const list = document.getElementById("scoreList");

  list.innerHTML = "";

  scores.forEach(s => {
    list.innerHTML += `<li>${s.score} - ${s.date}</li>`;
  });
}

function addScore() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  if (scores.length >= 5) scores.shift();

  scores.push({
    score: score.value,
    date: date.value
  });

  localStorage.setItem("scores", JSON.stringify(scores));

  loadScores();
}

function runDraw() {
  let nums = [];

  while (nums.length < 5) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!nums.includes(n)) nums.push(n);
  }

  drawResult.innerText = nums.join(", ");
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.href = "login.html";
}

function goToAdmin() {
  window.location.href = "admin.html";
}

function goToCharities() {
  window.location.href = "charities.html";
}