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

        const title = topic.querySelector("h3").textContent.trim();

        // সাবজেক্টের নাম অনুযায়ী ফোল্ডারের ভেতর প্রবেশ করবে
        window.location.href = `${title}/index.html`;

    });

});