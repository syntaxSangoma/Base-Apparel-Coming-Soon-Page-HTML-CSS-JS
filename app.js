const form = document.querySelector("#rsvpForm");
const input = document.querySelector(".rsvpForm__email-input");
const button = document.querySelector(".rsvpForm__button");
const statusMessage = document.querySelector(".status-message");
const statusIcon = document.querySelector(".rsvpForm__status-icon");

if (form) {
  input.addEventListener("input", () => {
    const value = input.value.trim();
    const isEmpty = value === "";
    const isValid = input.validity.valid;

    input.classList.remove("valid", "invalid");

    if (isEmpty) {
      input.classList.add("invalid");
      statusMessage.textContent = "Email address is required.";
      statusMessage.style.display = "block";
      statusMessage.style.color = "#f96464";
      input.style.borderColor = "#f96464";
      button.disabled = true;
      statusIcon.innerHTML = `
        <img
            src="./images/icon-error.svg"
            alt="icon-error"
            width="24"
            height="24"
        />

        <figcaption class="offscreen">icon-error</figcaption>
      `;
    } else if (!isValid) {
      input.classList.add("invalid");
      statusMessage.textContent = "Please enter a valid email address.";
      statusMessage.style.display = "block";
      statusMessage.style.color = "#f96464";
      input.style.borderColor = "#f96464";
      button.disabled = true;
      statusIcon.innerHTML = `
        <img
            src="./images/icon-error.svg"
            alt="icon-error"
            width="24"
            height="24"
        />

        <figcaption class="offscreen">icon-error</figcaption>
      `;
    } else {
      input.classList.add("valid");
      statusMessage.textContent = "Successful";
      statusMessage.style.display = "block";
      statusMessage.style.color = "#008000";
      input.style.borderColor = "#008000";
      button.disabled = false;
      statusIcon.innerHTML = `
        <img
            src="./images/icon-success.svg"
            alt="icon-success"
            width="24"
            height="24"
        />

        <figcaption class="offscreen">icon-success</figcaption>
      `;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    statusMessage.style.display = "none";
    input.style.borderColor = "";
    statusIcon.innerHTML = ``;
  });
}
