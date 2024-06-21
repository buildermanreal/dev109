document.getElementById("contact-form").addEventListener("submit", (event) => {
  const contactForm = event.target
  if (!validateContactForm(contactForm)) {
    event.preventDefault();
    displayError(contactForm, 'Invalid input')
  }
});

