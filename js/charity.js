const charities = [
  "Education Fund",
  "Health Support",
  "Child Welfare",
  "Disaster Relief"
];

const list = document.getElementById("charityList");

charities.forEach(c => {
  const li = document.createElement("li");
  li.innerText = c;
  list.appendChild(li);
});

function goBack() {
  window.location.href = "dashboard.html";
}