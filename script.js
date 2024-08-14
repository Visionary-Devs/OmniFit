document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission</p>const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

// Simulate sending the message
alert(`Thank you, ${name}! Your message has been sent.`);

// Clear the form
document.getElementById('contact-form').reset();
