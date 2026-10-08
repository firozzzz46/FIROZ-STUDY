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
// Live Clock & Auto Hijri Date Fix
// ==============================

function updateClock() {

    const now = new Date();

    // Live Time
    const time = now.toLocaleTimeString(
        "en-GB",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
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

    // Hijri Date (Mobile Locale Fix)
    try {
        const hijri = new Intl.DateTimeFormat(
            "bn-BD-u-ca-islamic-umalqura",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        ).format(now);

        document.getElementById("hijriDate").innerHTML = "🕌 " + hijri + " হিজরি";
    } catch (e) {
        const hijriFallback = new Intl.DateTimeFormat(
            "bn-BD-u-ca-islamic",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        ).format(now);

        document.getElementById("hijriDate").innerHTML = "🕌 " + hijriFallback + " হিজরি";
    }
}

updateClock();
setInterval(updateClock, 1000);