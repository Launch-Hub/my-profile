emailjs.init({
  publicKey: "Y31HFZgqPwwp8xV7m",
});

const requester = document.querySelector('[name="requester"]')?.value ?? "";
const email = document.querySelector('[name="email"]')?.value ?? "";
const subject = document.querySelector('[name="subject"]')?.value ?? "";
const message = document.querySelector('[name="message"]')?.value ?? "";

function verifyFields() {
  console.log(requester.value, email.textContent, subject.textContent, message.textContent);
  console.log(emailjs);
  
  return false;
}

document.querySelector("#btnSendMessage").addEventListener("click", function () {
  if (!verifyFields()) return;

  // Send message to my email using template
  emailjs.sendForm("service_qrpsp15", "tmp_contact_me-at34j2", this);
});
