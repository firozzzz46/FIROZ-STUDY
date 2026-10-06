function goBack() {
    window.history.back();
}


// সব study card automatically detect করবে
const topics = document.querySelectorAll(".topic");

topics.forEach((topic) => {

    topic.addEventListener("click", () => {

        const title = topic.querySelector("h3").textContent;

        console.log("Selected:", title);

        // পরে এখানে প্রতিটি subject-এর page open করার system হবে

    });

});