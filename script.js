function starts(){
    // GSAP Text Animations
    alert("hey vishal Please wear 🎧 headphones!")
    alert("click anywhere to start after clicking ok!");
gsap.from("header h1", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
});
gsap.from("header p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
});
gsap.from(".message", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 1
});
gsap.from(".photos img", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
});
gsap.from("footer", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    delay: 2
});
// Confetti Animation
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        document.getElementById("confetti").appendChild(confetti);
    }
}
createConfetti();
// Falling Confetti Animation
const styles = document.createElement("style");
styles.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(styles);
}
function playmusic(){
    const music = document.getElementById("background-music");
    music.volume = 0; // Start at zero volume
    music.play();   
    let volume = 0;
    const fadeIn = setInterval(() => {
        if (volume < 1) {
            volume += 0.1;
            music.volume = volume;
        } else {
            clearInterval(fadeIn);
        }
    }, 200); // Increase volume every 200ms
}
