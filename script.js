const questions = [
    { question: "Who composed 'On A Hymnsong Of Philip Bliss'?", answer: "David Holsinger", options: ["David Holsinger", "Adrian B. Sims", "Kenley Kristofferson", "Randall Standridge"] },
    { question: "Who composed 'Evergreen Escapades'?", answer: "Adrian B. Sims", options: ["Adrian B. Sims", "David Holsinger", "Brian Balmages", "Chicago"] },
    { question: "Who composed 'Prarie Wedding'?", answer: "Kenley Kristofferson", options: ["Kenley Kristofferson", "Tanishq Dhingra", "Chicago", "Randall Standridge"] },
    { question: "Who composed 'Darkheart'?", answer: "Randall Standridge", options: ["Randall Standridge", "Kenley Kristofferson", "Adrian B. Sims", "Tanishq Dhingra"] },
    { question: "Who composed 'Rippling Watercolors'?", answer: "Brian Balmages", options: ["Brian Balmages", "Randall Standridge", "Chicago", "Adrian B. Sims"] },
    { question: "Who composed '25 or 6 to 4'?", answer: "Chicago", options: ["Chicago", "Kenley Kristofferson", "Tanishq Dhingra", "Adrian B. Sims"] },
    { question: "Who played the French horn solo in 'On A Hymnsong Of Philip Bliss'?", answer: "Tanishq Dhingra", options: ["Tanishq Dhingra", "Bryce Fischer", "David Holsinger", "Brian Balmages"] },
    { question: "Who played a trumpet solo in 'Evergreen Escapades'?", answer: "Bryce Fischer", options: ["Bryce Fischer", "Tanishq Dhingra", "Kenley Kristofferson", "David Holsinger"] },
    { question: "How was our quiz?", answer: "Amazing!!", options: ["Amazing!!", "Good", "Decent", "Bad"] }
];

let currentQuestion = 0;

const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const result = document.getElementById("result");
const endScreen = document.getElementById("end-screen");

const questionElement = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");

startBtn.addEventListener("click", startQuiz);

answerBtns.forEach((button, index) => {
    button.addEventListener("click", () => checkAnswer(index));
});

function startQuiz() {
    document.getElementById("start-screen").classList.remove("active");
    questionContainer.classList.add("active");
    loadQuestion();
}

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answerBtns.forEach((button, index) => {
        button.textContent = current.options[index];
    });
    result.textContent = "";
}

function checkAnswer(index) {
    const current = questions[currentQuestion];
    if (answerBtns[index].textContent === current.answer) {
        result.textContent = "✅ Correct!";
        result.className = "correct";
        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 1500);
        } else {
            endScreen.classList.add("active");
            questionContainer.classList.remove("active");
        }
    } else {
        result.textContent = "❌ Wrong! Restarting the quiz...";
        result.className = "incorrect";
        setTimeout(() => {
            currentQuestion = 0;
            loadQuestion();
        }, 1500);
    }
}

// Restart button logic
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById("end-screen").classList.remove("active");
    document.getElementById("start-screen").classList.add("active");
}
