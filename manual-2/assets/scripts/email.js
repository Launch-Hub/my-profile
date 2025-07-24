emailjs.init({
  publicKey: "Y31HFZgqPwwp8xV7m",
});

function verifyFields() {
  const requester = document.querySelector('[name="requester"]')?.value ?? "";
  const email = document.querySelector('[name="email"]')?.value ?? "";
  const subject = document.querySelector('[name="subject"]')?.value ?? "";
  const message = document.querySelector('[name="message"]')?.value ?? "";
  
  if (!requester || !email || !subject || !message) {
    alert("Please fill in all fields");
    return false;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  
  return true;
}

document.querySelector("#btnSendMessage").addEventListener("click", function () {
  if (!verifyFields()) return;

  // Get the form element
  const form = document.querySelector(".contact-form");
  
  // Send message to my email using template
  emailjs.sendForm("service_qrpsp15", "tmp_contact_me-at34j2", form)
    .then(function(response) {
      alert("Message sent successfully!");
      form.reset();
    }, function(error) {
      alert("Failed to send message. Please try again.");
    });
});
