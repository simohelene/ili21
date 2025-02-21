// Efect de confetti la apăsarea butonului DA
function showConfetti() {
    const canvas = document.getElementById("confetti");
    const confetti = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 5 + 2,
            d: Math.random() * canvas.height / 2
        });
    }
    function drawConfetti() {
        confetti.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            confetti.beginPath();
            confetti.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            confetti.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.fill();
            p.y += Math.random() * 3;
            if (p.y > canvas.height) p.y = 0;
        });
        requestAnimationFrame(drawConfetti);
    }
    drawConfetti();
}

// Efect de ploaie la apăsarea butonului NU
function showRain() {
    document.body.style.background = "#ccc";
    alert("Plouă pe ecran! ☔");
}

// Efect de fulgi de nea la apăsarea butonului POATE
function showSnow() {
    document.body.style.background = "#e0f7fa";
    alert("Ninge ușor pe ecran! ❄️");
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
