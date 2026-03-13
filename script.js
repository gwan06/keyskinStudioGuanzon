// Buy button interaction
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    alert(`You selected the ${product}. Thank you for choosing KeySkins Studio!`);
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "#f87171";
    return;
  }

  formMessage.textContent = "Your message has been sent successfully!";
  formMessage.style.color = "#4ade80";

  contactForm.reset();
});