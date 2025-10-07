// ====== Side Navigation Toggle ======
function toggleNav() {
  const nav = document.getElementById("sideNav");
  nav.style.width = nav.style.width === "250px" ? "0" : "250px";
}

// ====== Frontend Validation ======
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Basic name check
  if (name.length < 3) {
    message.style.color = "red";
    message.textContent = "Name must be at least 3 characters long.";
    return;
  }

  // Email validation with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
    return;
  }

  // Password validation (min 6 chars, 1 uppercase, 1 number)
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    message.style.color = "red";
    message.textContent = "Password must have at least 6 characters, one uppercase letter, and one number.";
    return;
  }

  // Confirm password match
  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  // Success
  message.style.color = "green";
  message.textContent = "Registration successful!";
  document.getElementById("registerForm").reset();
});
