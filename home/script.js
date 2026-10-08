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
        // Qawmi Studie → Qawmi Page
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

    // Hijri Date
    const hijri = new Intl.DateTimeFormat(
        "en-TN-u-ca-islamic",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    ).format(now);

    const months = {
        "Muharram":"মুহাররম",
        "Safar":"সফর",
        "Rabiʻ I":"রবিউল আউয়াল",
        "Rabiʻ II":"রবিউস সানি",
        "Jumada I":"জুমাদাল উলা",
        "Jumada II":"জুমাদাস সানিয়া",
        "Rajab":"রজব",
        "Shaʻban":"শাবান",
        "Ramadan":"রমজান",
        "Shawwal":"শাওয়াল",
        "Dhuʻl-Qiʻdah":"জিলকদ",
        "Dhuʻl-Hijjah":"জিলহজ্জ"
    };

    let hijriBn = hijri;

    for (let key in months) {
        hijriBn = hijriBn.replace(key, months[key]);
    }

    document.getElementById("hijriDate").innerHTML =
        "🕌 " + hijriBn + " হিজরি";
}

updateClock();
setInterval(updateClock, 1000);
