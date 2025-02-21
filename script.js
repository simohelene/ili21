document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const quizContainer = document.getElementById("quiz-container");
    const certificateSection = document.getElementById("certificate-section");
    const cakeSection = document.getElementById("cake-section");
    const confettiCanvas = document.getElementById("confetti-canvas");
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });
    }
    
    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }
    
    showSlide(currentSlide);

    const questions = [
        { question: "Ești gata să primești cea mai tare surpriză a zilei?", responses: { "DA": "Perfect! Atunci stai pe aproape!", "NU": "Ești sigură? N-ai idee ce ratezi! 😏", "POATE": "Hai că știu că vrei! 😆" }},
        { question: "Accepți oficial titlul de Sărbătorita Supremă a zilei?", responses: { "DA": "Așa te vreau! Regina zilei! 👑", "NU": "Prea târziu, ți l-am dat deja! 😆", "POATE": "Nu există poate! Ești deja superstarul zilei!" }},
        { question: "Recunoști că sunt cea mai tare prietenă ever?", responses: { "DA": "Știam eu! ❤", "NU": "Minți, dar te iert, e ziua ta! 😆", "POATE": "Adică vrei să zici DA, dar te joci cu mine! 😂" }},
        { question: "Dacă azi ai putea să-ți îndeplinești orice dorință, ai face-o?", responses: { "DA": "Atunci fă-ți o dorință acum! 💫", "NU": "Cum adică nu?! Hai că sigur ai una! 🎁", "POATE": "Hmm, hai că mă faci curioasă! 😏" }},
        { question: "În final, promiți să ai o zi absolut GENIALĂ?", responses: { "DA": "Asta e atitudinea! 💃🔥", "NU": "Ce-ai zis? Nu aud, muzica e prea tare! 😂", "POATE": "Nu există poate! De azi înainte e doar DA! 🎈" }}
    ];

    let currentQuestionIndex = 0;
    function startQuiz() {
        currentSlide++;
        showSlide(currentSlide);
        showNextQuestion();
    }
    
    function showNextQuestion() {
        if (currentQuestionIndex < questions.length) {
            const questionData = questions[currentQuestionIndex];
            document.getElementById("quiz-question").innerText = questionData.question;
        } else {
            quizContainer.style.display = "none";
            certificateSection.style.display = "flex";
        }
    }
    
    function answerQuiz(answer) {
        const responseText = questions[currentQuestionIndex].responses[answer];
        document.getElementById("response").innerText = responseText;
        setTimeout(() => {
            currentQuestionIndex++;
            showNextQuestion();
        }, 1500);
    }

    function showCertificate() {
        certificateSection.style.display = "none";
        cakeSection.style.display = "flex";
        launchConfetti();
    }

    function launchConfetti() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        const ctx = confettiCanvas.getContext("2d");
        const confetti = [];
        for (let i = 0; i < 100; i++) {
            confetti.push({ x: Math.random() * confettiCanvas.width, y: Math.random() * confettiCanvas.height, r: Math.random() * 5 + 2, d: Math.random() * confettiCanvas.height / 2 });
        }
        function drawConfetti() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            confetti.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
                ctx.fill();
                p.y += Math.random() * 3;
                if (p.y > confettiCanvas.height) p.y = 0;
            });
            requestAnimationFrame(drawConfetti);
        }
        drawConfetti();
    }

    window.startQuiz = startQuiz;
    window.answerQuiz = answerQuiz;
    window.showCertificate = showCertificate;
    window.nextSlide = nextSlide;
});
