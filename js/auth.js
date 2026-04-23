function signup() {
  const emailVal = document.getElementById("email").value;
  const passVal = document.getElementById("password").value;

  if (!emailVal || !passVal) {
    alert("Fill all fields");
    return;
  }

  const user = {
    email: emailVal,
    password: passVal
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful!");
  window.location.href = "login.html";
}

function login() {
  const emailVal = document.getElementById("email").value;
  const passVal = document.getElementById("password").value;

  const stored = JSON.parse(localStorage.getItem("user"));

  if (!stored) {
    alert("No user found. Please signup first.");
    return;
  }

  if (stored.email === emailVal && stored.password === passVal) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}