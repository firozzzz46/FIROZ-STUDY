function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    const yearGrid = document.getElementById("yearGrid");
    if (!yearGrid) return;

    // Part 1 theke 35 porjonto alada alada lekhar common list (apni pore a-gula change kore nite parben)
    const partDescriptions = [
        "SENTENCE FOUNDATION",
        "WORD & PARTS OF SPEECH",
        "NOUN",
        "PRONOUN",
        "ADJECTIVE",
        "VERB",
        "ADVERB",
        "PREPOSITION",
        "CONJUNCTION",
        "INTERJECTION",
        "SUBJECT, PERSON & NUMBER",
        "Tense (Present, Past, Future & Revision)",
        "Phrase & Clause",
        "Sentence Structure (Simple, Complex, Compound)",
        "Subject-Verb Agreement",
        "Right Form of Verbs",
        "Articles & Determiners",
        "Modals & Auxiliary Verbs",
        "Pronoun Reference & Agreement",
        "Gerund, Infinitive & Participle",
        "Voice (Active & Passive)",
        "Narration (Direct & Indirect Speech)",
        "Degree of Comparison",
        "Conditional Sentences",
        "WH-Questions & Tag Questions",
        "Modifiers",
        "Completing Sentences",
        "Connectors & Linking Words",
        "Special Uses of Words & Phrases",
        "Appropriate Prepositions",
        "Prefix, Suffix & Word Formation",
        "Punctuation & Capitalization",
        "Synonyms & Antonyms",
        "Common Errors & Sentence Correction",
        "Integrated Grammar Review"
    ];

    const startPart = 1;
    const endPart = 35;

    for (let part = startPart; part <= endPart; part++) {
        const index = part - startPart;
        const link = document.createElement("a");
        link.href = `part${part}.html`;
        link.className = "topic-link";

        // Staggered Delay for smooth floating entrance
        const delay = (index * 0.08).toFixed(2);

        // protiti part-er jonno array theke alada text nibe
        const description = partDescriptions[index] || `English Grammar Practice ${part}`;

        link.innerHTML = `
            <div class="topic" style="animation-delay: ${delay}s;">
                <div class="topic-icon">📚</div>
                <div class="topic-info">
                    <h3>Part ${part}</h3>
                    <p>${description}</p>
                </div>
                <span class="arrow">→</span>
            </div>
        `;

        yearGrid.appendChild(link);
    }
});