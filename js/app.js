document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".math-card"); 
    const modal = document.querySelector("#quiz-modal"); 
    const quizController = new QuizController(modal); 

    cards.forEach(card => { 

        const topic = card.dataset.quiz;

        card.addEventListener("click", () => { 

            quizController.startQuiz(topic); 

        }); 
    }); 
}); 