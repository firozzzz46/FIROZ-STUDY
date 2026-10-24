
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const searchInput = document.getElementById("searchInput");
  const chaptersList = document.getElementById("chaptersList");
  const countElement = document.getElementById("chapterCount");
  const emptyState = document.getElementById("emptyState");
  const themeToggle = document.getElementById("themeToggle");

  // Check that the required HTML elements exist.
  if (!searchInput || !chaptersList || !countElement || !emptyState) {
    console.error("Firoz Study: Required HTML elements were not found.");
    return;
  }

  // Get all lessons directly from HTML.
  function getLessons() {
    return Array.from(
      chaptersList.querySelectorAll(".lesson-card")
    );
  }

  // Format automatic lesson numbers: 01, 02, 03...
  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  // Automatically number all lessons.
  function updateLessonNumbers() {
    const lessons = getLessons();

    lessons.forEach((lesson, index) => {
      const numberElement = lesson.querySelector(".lesson-number");

      if (numberElement) {
        numberElement.textContent = formatNumber(index + 1);
      }

      // Animate each lesson smoothly.
      lesson.style.animationDelay = `${Math.min(index * 0.12, 1.2)}s`;
    });

    return lessons;
  }

  // Search by lesson title, subtitle, or number.
  function searchLessons() {
    const lessons = updateLessonNumbers();
    const query = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    lessons.forEach((lesson, index) => {
      const title =
        lesson.querySelector(".lesson-title")?.textContent.trim() || "";

      const subtitle =
        lesson.querySelector(".lesson-subtitle")?.textContent.trim() || "";

      const number = formatNumber(index + 1);
      const plainNumber = String(index + 1);

      const searchableText =
        `${title} ${subtitle} ${number} ${plainNumber}`.toLowerCase();

      const matches = searchableText.includes(query);

      lesson.hidden = !matches;

      if (matches) {
        visibleCount++;
      }
    });

    countElement.textContent =
      `${visibleCount} ${visibleCount === 1 ? "Lesson" : "Lessons"}`;

    emptyState.hidden = visibleCount !== 0;
  }

  // Search updates whenever the user types.
  searchInput.addEventListener("input", searchLessons);

  // Clicking a lesson opens its href.
  // Normal links work automatically, so no custom click handler is needed.
  chaptersList.addEventListener("click", (event) => {
    const lesson = event.target.closest(".lesson-card");

    if (!lesson || !chaptersList.contains(lesson)) {
      return;
    }

    const destination = lesson.getAttribute("href");

    // Prevent the empty "#" link from jumping to the top.
    if (!destination || destination.trim() === "" || destination === "#") {
      event.preventDefault();
      return;
    }

    // The browser opens valid links normally.
  });

  // Dark and light mode.
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector("i");

    function setTheme(isDark) {
      document.body.classList.toggle("dark-mode", isDark);

      if (themeIcon) {
        themeIcon.className = isDark
          ? "fa-solid fa-sun"
          : "fa-solid fa-moon";
      }

      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }

    themeToggle.addEventListener("click", () => {
      const isDark = !document.body.classList.contains("dark-mode");
      setTheme(isDark);
    });

    setTheme(false);
  }

  // Initial page setup.
  searchLessons();
});
