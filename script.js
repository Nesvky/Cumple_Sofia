const sections = ["welcome", "flowers", "letter", "favorites", "music", "wink", "final"];
const petals = document.getElementById("petals");

function showSection(id) {
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) section.classList.toggle("hidden", sectionId !== id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "flowers") startPetals();
}

document.getElementById("startBtn").addEventListener("click", () => showSection("flowers"));

document.querySelectorAll(".next-btn").forEach(button => {
  button.addEventListener("click", () => showSection(button.dataset.next));
});

document.getElementById("teaseBtn").addEventListener("click", () => {
  const reply = document.getElementById("teaseReply");
  reply.classList.remove("hidden");
  document.getElementById("teaseBtn").textContent = "Eso, tú sigue haciéndote la inocente 😌";
});

document.getElementById("restartBtn").addEventListener("click", () => showSection("welcome"));

const musicModal = document.getElementById("musicModal");
const closeMusic = document.getElementById("closeMusic");
const musicToggle = document.getElementById("musicToggle");

const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const questionOptions = document.getElementById("questionOptions");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const answerMessage = document.getElementById("answerMessage");
const answerText = document.getElementById("answerText");
const backQuestion = document.getElementById("backQuestion");

// Abrir la pregunta desde el botón de arriba.
musicToggle.addEventListener("click", () => {
    musicModal.classList.remove("hidden");
});

// Cerrar la ventana.
closeMusic.addEventListener("click", () => {
    musicModal.classList.add("hidden");
});

musicModal.addEventListener("click", (event) => {
    if (event.target === musicModal) {
        musicModal.classList.add("hidden");
    }
});

// Respuesta a "Sí".
yesButton.addEventListener("click", () => {
    questionTitle.textContent = "JAJAJA, sabía que me la querias mamar. 🥵";

    questionText.textContent =
        "Entonces aquí va mi pregunta: ¿me concedes el privilegio de meter mi verga en tu boca? 😍";

    showAnswer(
        "Esa respuesta queda pendiente... por ahora, disfruta tu día, Sofía. ♡"
    );
});

// Respuesta a "No".
noButton.addEventListener("click", () => {
    questionTitle.textContent = "Babosa que yo sé que me amas. 💘";

    questionText.textContent =
        "Y niegamelo pa que veas.😤";

    showAnswer(
        "PDTA: Te quiero echar la cremita.😈"
    );
});

// Mostrar la respuesta.
function showAnswer(message) {
    questionOptions.classList.add("hidden");
    answerMessage.classList.remove("hidden");
    answerText.textContent = message;
}

// Volver a la pregunta inicial.
backQuestion.addEventListener("click", () => {
    questionTitle.textContent =
        "Sofia, si ves esto es porque me lo quieres mamar en diciembre.";

    questionText.textContent =
        "Prometo que sabe rico.";

    questionOptions.classList.remove("hidden");
    answerMessage.classList.add("hidden");
});

// Cerrar con Escape.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        musicModal.classList.add("hidden");
    }
});

let petalTimer;
function startPetals() {
  if (petalTimer) return;
  const symbols = ["✿", "♡", "✧", "❀"];
  petalTimer = setInterval(() => {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (12 + Math.random() * 16) + "px";
    petal.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 10500);
  }, 450);
}

const music = document.getElementById("birthdayMusic");
const playButton = document.getElementById("playMusic");

playButton.addEventListener("click", async () => {
    try {
        if (music.paused) {
            await music.play();
            playButton.textContent = "Ⅱ Pausar canción";
        } else {
            music.pause();
            playButton.textContent = "♫ Reproducir canción";
        }
    } catch (error) {
        playButton.textContent = "No se pudo reproducir";
        console.error("Error al reproducir el audio:", error);
    }
});

music.addEventListener("ended", () => {
    playButton.textContent = "♫ Reproducir canción";
});