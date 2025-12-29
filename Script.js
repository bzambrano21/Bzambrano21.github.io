const btn = document.getElementById("darkModeBtn");
if (btn) {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
      error.textContent = "All fields are required.";
      error.style.color = "red";
    } else {
      error.textContent = "Message sent successfully!";
      error.style.color = "green";
      form.reset();
    }
  });
}