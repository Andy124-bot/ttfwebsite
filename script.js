document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !email || !contactNumber || !genderSelected || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(contactNumber)) {
        alert("Please enter a numeric contact number.");
        return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for submitting your details");
    document.getElementById("contactForm").reset();

    const slides = document.querySelectorAll('.carousel-image');
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 4000);
});