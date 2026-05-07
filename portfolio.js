// EmailJS initialization (replace with your public key if needed)
(function() {
    emailjs.init("yIktbpdUXhm5ATQUg");
})();

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_kzm0vyf", "template_6vnwpqk", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        title: document.getElementById("title").value,
        message: document.getElementById("message").value
    })
    .then(function(response) {
        alert("✅ Message sent successfully! I'll get back within 24hrs.");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("❌ Failed to send message. Please try again later.");
        console.error(error);
    });
});

// Active navbar highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Header background change on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(5, 7, 12, 0.95)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(10, 12, 16, 0.8)";
        header.style.boxShadow = "none";
    }
});