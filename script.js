// Efecte animate pentru confetti, ploaie și fulgi de nea
function createAnimation(effect) {
    const animationContainer = document.createElement("div");
    animationContainer.classList.add(effect);
    document.body.appendChild(animationContainer);
    setTimeout(() => animationContainer.remove(), 3000);
}

// Chestionar interactiv
const questions = [
    { question: "Ești gata să primești cea mai tare surpriză a zilei?", responses: { "DA": "Perfect! Atunci stai pe aproape!", "NU": "Ești sigură? N-ai idee ce ratezi! 😏", "POATE": "Hai că știu că vrei! 😆" }},
    { question: "Accepți oficial titlul de Sărbătorita Supremă a zilei?", responses: { "DA": "Așa te vreau! Regina zilei! 👑", "NU": "Prea târziu, ți l-am dat deja! 😆", "POATE": "Nu există poate! Ești deja superstarul zilei!" }},
    { question: "Recunoști că sunt cea mai tare prietenă ever?", responses: { "DA": "Știam eu! ❤", "NU": "Minți, dar te iert, e ziua ta! 😆", "POATE": "Adică vrei să zici DA, dar te joci cu mine! 😂" }},
    { question: "Dacă azi ai putea să-ți îndeplinești orice dorință, ai face-o?", responses: { "DA": "Atunci fă-ți o dorință acum! 💫", "NU": "Cum adică nu?! Hai că sigur ai una! 🎁", "POATE": "Hmm, hai că mă faci curioasă! 😏" }},
    { question: "În final, promiți să ai o zi absolut GENIALĂ?", responses: { "DA": "Asta e atitudinea! 💃🔥", "NU": "Ce-ai zis? Nu aud, muzica e prea tare! 😂", "POATE": "Nu există poate! De azi înainte e doar DA! 🎈" }}
];

let currentQuestionIndex = 0;
function startQuiz() {
    document.querySelector(".scroll-section").style.display = "none";
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById("quiz-question").innerText = questionData.question;
        document.querySelector(".quiz-container").style.display = "block";
    } else {
        document.querySelector(".quiz-container").style.display = "none";
        document.querySelector(".final-message").style.display = "block";
    }
}

function answerQuiz(answer) {
    const responseText = questions[currentQuestionIndex].responses[answer];
    alert(responseText);
    if (answer === "DA") createAnimation("confetti");
    if (answer === "NU") createAnimation("rain");
    if (answer === "POATE") createAnimation("snow");
    currentQuestionIndex++;
    setTimeout(showNextQuestion, 1500);
}

// Fade-in la scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".scroll-section");
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
