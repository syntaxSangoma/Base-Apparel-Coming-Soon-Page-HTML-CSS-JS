const form = document.querySelector("#rsvpForm");
const input = document.querySelector(".rsvpForm__email-input");
const button = document.querySelector(".rsvpForm__button");
const statusMessage = document.querySelector(".status-message");
const statusIcon = document.querySelector(".rsvpForm__status-icon");

if (form && input && button && statusMessage && statusIcon) {
  // This centralizes the error UI logic
  function setError(message) {
    input.classList.add("invalid");
    statusMessage.textContent = message;
    statusMessage.style.display = "block";
    statusMessage.style.color = "#f96464";
    input.style.borderColor = "#f96464";
    button.disabled = true;
    statusIcon.innerHTML = `
      <img src="./images/icon-error.svg" alt="icon-error" width="24" height="24" />
      <figcaption class="offscreen">icon-error</figcaption>
    `;
  }

  // This centralizes the success UI logic
  function setSuccess(message) {
    input.classList.add("valid");
    statusMessage.textContent = message;
    statusMessage.style.display = "block";
    statusMessage.style.color = "#008000";
    input.style.borderColor = "#008000";
    button.disabled = false;
    statusIcon.innerHTML = `
      <img src="./images/icon-success.svg" alt="icon-success" width="24" height="24" />
      <figcaption class="offscreen">icon-success</figcaption>
    `;
  }

  function resetFormUI() {
    statusMessage.style.display = "none";
    input.style.borderColor = "";
    input.classList.remove("valid", "invalid");
    statusIcon.innerHTML = "";
    button.disabled = true;
    input.value = "";
  }

  input.addEventListener("input", () => {
    const value = input.value.trim();
    const isEmpty = value === "";
    const isValid = input.validity.valid;

    input.classList.remove("valid", "invalid");

    if (isEmpty) {
      setError("Email address is required.");
    } else if (!isValid) {
      setError("Please enter a valid email address.");
    } else {
      setSuccess("Successful");
    }
  });

  // Reset UI logic when submited
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetFormUI();
  });
}
