const form = document.getElementById("loginForm");
const identity = document.getElementById("identity");
const password = document.getElementById("password");
const status = document.getElementById("status");
const reveal = document.querySelector(".reveal");

function showMessage(message, isError = false) {
  status.textContent = message;
  status.classList.toggle("error", isError);
}

reveal.addEventListener("click", () => {
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  reveal.setAttribute("aria-label", visible ? "Show password" : "Hide password");
  reveal.title = visible ? "Show password" : "Hide password";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!identity.value.trim()) {
    showMessage("Please enter your email or username.", true);
    identity.focus();
    return;
  }
  if (!password.value) {
    showMessage("Please enter your password.", true);
    password.focus();
    return;
  }
  if (password.value.length < 6) {
    showMessage("Password must contain at least 6 characters.", true);
    password.focus();
    return;
  }
  showMessage("Demo sign-in successful. Connect your authentication API to enable real login.");
});

document.getElementById("forgot").addEventListener("click", (event) => {
  event.preventDefault();
  showMessage(identity.value.trim()
    ? `Password reset flow can be started for ${identity.value.trim()} once a backend is connected.`
    : "Enter your email or username first.", !identity.value.trim());
});
document.getElementById("createAccount").addEventListener("click", (event) => {
  event.preventDefault();
  showMessage("Connect your registration page to enable account creation.");
});
document.querySelectorAll(".social").forEach((button) => {
  button.addEventListener("click", () => showMessage("Configure Google, Apple, or Facebook OAuth to use social sign-in."));
});
