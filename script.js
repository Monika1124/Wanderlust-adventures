document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".navrbar-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Mobile Navigation Toggle (If you want to add a burger menu)
    const navToggle = document.createElement("div");
    navToggle.innerHTML = "&#9776;";
    navToggle.style.cssText = "font-size: 30px; cursor: pointer; display: none;";
    document.querySelector(".navbar").appendChild(navToggle);

    const navLinks = document.querySelector(".navrbar-links");
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    function handleResize() {
        if (window.innerWidth < 760) {
            navToggle.style.display = "block";
            navLinks.style.display = "none";
        } else {
            navToggle.style.display = "none";
            navLinks.style.display = "flex";
        }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    


    // Form Validation for Contact Us
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form from submitting immediately

        // Get form values
        const name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
        const email = document.querySelector('input[placeholder="Enter your email"]').value.trim();
        const phone = document.querySelector('input[placeholder="Enter your phone number"]').value.trim();
        const destination = document.querySelector('input[placeholder="Enter your destination"]').value.trim();
        const message = document.querySelector('textarea').value.trim(); // Optional field

        let errorMessage = "";

        // Validation checks (Message is OPTIONAL)
        if (!name || !email || !phone || !destination) {
            errorMessage = "❌ All fields (except Message) are required!";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage = "❌ Please enter a valid email address!";
        } else if (!/^\d{10}$/.test(phone)) {
            errorMessage = "❌ Phone number must be 10 digits!";
        }

        // Display error or success message
        const messageBox = document.createElement("p");
        messageBox.style.fontSize = "16px";
        messageBox.style.marginTop = "10px";
        messageBox.style.padding = "10px";
        messageBox.style.borderRadius = "5px";
        messageBox.style.textAlign = "center";

        if (errorMessage) {
            messageBox.textContent = errorMessage;
            messageBox.style.backgroundColor = "#ffcccc";
            messageBox.style.color = "#d9534f";
        } else {
            messageBox.textContent = "✅ Thank you! Your message has been sent.";
            messageBox.style.backgroundColor = "#ccffcc";
            messageBox.style.color = "#5cb85c";
            document.querySelector("form").reset(); // Clear the form after submission
        }

        // Remove any existing message and add new one
        const existingMessage = document.querySelector(".form-message");
        if (existingMessage) existingMessage.remove();

        messageBox.classList.add("form-message");
        document.querySelector(".contact-card").appendChild(messageBox);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageBox.remove();
        }, 5000);
    });
});
