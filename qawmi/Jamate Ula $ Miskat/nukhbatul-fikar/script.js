function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    const yearGrid = document.getElementById("yearGrid");
    if (!yearGrid) return;

    const startYear = 1430;
    const endYear = 1447;

    for (let year = startYear; year <= endYear; year++) {
        const index = year - startYear;
        const link = document.createElement("a");
        link.href = `${year}h.html`;
        link.className = "topic-link";

        // Staggered Delay for smooth floating entrance
        const delay = (index * 0.08).toFixed(2);

        link.innerHTML = `
            <div class="topic" style="animation-delay: ${delay}s;">
                <div class="topic-icon">📖</div>
                <div class="topic-info">
                    <h3>${year} Hijri</h3>
                    <p>Board Question & Answer</p>
                </div>
                <span class="arrow">→</span>
            </div>
        `;

        yearGrid.appendChild(link);
    }
});