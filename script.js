function showResponse(answer) {
    const response = document.getElementById('response');
    const responseText = document.getElementById('responseText');
    response.classList.remove('hidden');

    if (answer === 'yes') {
        responseText.textContent = "You’ve made me the happiest person ever! 💕";
        document.body.style.background = "linear-gradient(to bottom, #ffe6b3, #ffcc80)";
        confettiEffect();
    } else if (answer === 'talk') {
        responseText.textContent = "No matter what you decide, you’re amazing, and I’m lucky to know you.";
        document.body.style.background = "linear-gradient(to bottom, #cccccc, #e6e6e6)";
    }
}

function confettiEffect() {
    const confetti = document.createElement('div');
    confetti.innerHTML = "🎉";
    confetti.style.fontSize = "2rem";
    confetti.style.position = "absolute";
    confetti.style.animation = "fall 3s linear infinite";
    confetti.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
}
