// Toggle Navigation Menu
function toggleMenu() {
    document.querySelector('.nav-list').classList.toggle('active');
}

// Smooth Scrolling
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox Functionality
function openLightbox(imgElement) {
    document.getElementById('lightbox-img').src = imgElement.src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Contact Form Validation
function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    document.getElementById('contact-form').reset();
}
