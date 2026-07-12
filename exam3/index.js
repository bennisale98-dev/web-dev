const signupBtn = document.getElementById("signup-btn");
const statusEl = document.getElementById("status");

function createAccount() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Account created successfully!");
    }, 2000);
  });
}

signupBtn.addEventListener("click", () => {
  signupBtn.disabled = true;
  statusEl.textContent = "Creating account...";

  createAccount().then((result) => {
    statusEl.textContent = result;
    signupBtn.disabled = false;
  });
});