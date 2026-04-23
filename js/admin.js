function runDraw() {
  let nums = [];

  while (nums.length < 5) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!nums.includes(n)) nums.push(n);
  }

  document.getElementById("adminDraw").innerText =
    "Draw: " + nums.join(", ");
}

function goBack() {
  window.location.href = "dashboard.html";
}