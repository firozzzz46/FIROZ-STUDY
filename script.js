// ==============================
// সব Topic একসাথে ধরবে
// ==============================

const topics = document.querySelectorAll(".topic");


// ==============================
// প্রতিটি Topic-এর জন্য একই নিয়ম
// ==============================

topics.forEach((topic) => {

    topic.addEventListener("click", () => {

        const title = topic.querySelector("h3").textContent;

        console.log("Selected:", title);


        // ==============================
        // Navigation Logical Links
        // ==============================

        if (title === "Qawmi Study") {

            window.location.href = "../qawmi/index.html";

        }

        if (title === "Alia Study") {

            window.location.href = "../alia/index.html";

        }

        
        if (title === "Other Study") {

             window.location.href = "../others/index.html";

        }


    });

});


// ==============================
// Live Clock (Time & Date Only)
// ==============================

function updateClock() {

    const now = new Date();

    // Live Time (AM/PM সহ)
    const time = now.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }
    );

    document.getElementById("liveTime").textContent = time;

    // English Date
    const date = now.toLocaleDateString(
        "en-GB",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    document.getElementById("liveDate").textContent = date;
}

updateClock();
setInterval(updateClock, 1000);