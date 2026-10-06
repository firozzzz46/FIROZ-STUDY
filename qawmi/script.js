// Back Button Event
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}

// Select All Subject & Class Cards
const topics = document.querySelectorAll(".topic");

topics.forEach((topic, index) => {
    // Dynamic Animation Delay
    topic.style.animationDelay = `${0.1 + index * 0.1}s`;

    // Click Event to Redirect Pages
    topic.addEventListener("click", () => {
        const title = topic.querySelector("h3").textContent.trim();

        if (title.includes("Jamate Ula") || title.includes("Miskat")) {
             window.location.href = "Jamate Ula $ Miskat/index.html";
        }
    });
});