// ==============================
// Back button
// ==============================

function goBack() {

    window.history.back();

}


// ==============================
// সব Subject Card ধরবে
// ==============================

const topics = document.querySelectorAll(".topic");


// ==============================
// প্রতিটি Subject Card-এর জন্য
// ==============================

topics.forEach((topic, index) => {


    // ==============================
    // Automatic Animation Delay
    // ==============================

    topic.style.animationDelay = `${0.1 + index * 0.1}s`;


    // ==============================
    // Subject Card Click
    // ==============================

    topic.addEventListener("click", () => {

        const title = topic.querySelector("h3").textContent;

        console.log("Selected:", title);

    });

});