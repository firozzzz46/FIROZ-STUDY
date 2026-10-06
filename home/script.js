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

        if (title === "Qawmi Studie") {

            window.location.href = "../qawmi/index.html";

        }

        if (title === "Alia Study") {

            window.location.href = "../alia/index.html";

        }

        
        if (title === "Other Studie") {

             window.location.href = "../others/index.html";

        }


    });

});