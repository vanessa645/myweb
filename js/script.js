
console.log("Activity 3 JavaScript is working!");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const previewButton = document.getElementById("previewBtn");
    const feedback = document.getElementById("formFeedback");
    const preview = document.getElementById("messagePreview");

    // Feature 1: Dark mode
    const themeButton = document.getElementById("themeToggle");

    themeButton.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-mode");

        themeButton.textContent = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
    });

    // Feature 2: Change welcome message
    const welcomeButton = document.getElementById("changeWelcomeBtn");
    const welcomeMessage = document.getElementById("welcomeMessage");

    welcomeButton.addEventListener("click", function () {
        welcomeMessage.textContent =
            "Thank you for visiting my personal website!";
    });

    // Validate contact form
    function validateForm() {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const topic = document.getElementById("topic");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        feedback.textContent = "";
        preview.hidden = true;

        let valid = true;

        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your full name.";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            valid = false;
        }

        if (!valid) {
            feedback.textContent =
                "Please correct the errors above and try again.";
            return false;
        }

        document.getElementById("previewName").textContent =
            name.value.trim();

        document.getElementById("previewEmail").textContent =
            email.value.trim();

        document.getElementById("previewTopic").textContent =
            topic.value.trim() || "No topic provided";

        document.getElementById("previewMessage").textContent =
            message.value.trim();

        preview.hidden = false;
        feedback.textContent =
            "Your details are valid. Your message summary is displayed below.";

        return true;
    }

    // Preview button
    previewButton.addEventListener("click", function () {
        validateForm();
    });

    // Submit without reloading or sending a real message
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            feedback.textContent =
                "Form validated successfully. This is a demonstration; no message was sent.";

            preview.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    });

    // Clear form feedback when resetting
    form.addEventListener("reset", function () {
        feedback.textContent = "";
        preview.hidden = true;

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";
    });
});
