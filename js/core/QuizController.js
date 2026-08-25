class QuizController {

    constructor(modal) {
        /*this.card = card;*/
        this.modal = modal;
       /* this.topic = topic; */

        this.modalController = new ModalController(modal); 
        /*this.questionManager = new QuestionManager(topic);*/

        // find elements inside modals 
        
        this.task = modal.querySelector(".task");
        this.questionContent = modal.querySelector(".question-content"); 

        this.geometryDiagram = modal.querySelector(".geometry-diagram");

        this.answerInput = modal.querySelector(".answer-input"); 
        this.checkButton = modal.querySelector(".check-button"); 
        this.feedback = modal.querySelector(".feedback");  

        this.questionNumber = modal.querySelector(".question-number"); 
        this.score = modal.querySelector(".score"); 

        this.questionArea = modal.querySelector(".question-area"); 

        this.result = modal.querySelector(".result"); 
        this.finalScore = modal.querySelector(".final-score"); 
        this.finalMessage = modal.querySelector(".final-message"); 
        this.restartButton = modal.querySelector(".restart-button"); 

        this.currentQuestion = null; 

        this.questionManager = null; 
        this.topic = null; 
        
        this.setupEvents();
    }

    setupEvents() {
        // open quiz
        /*this.card.addEventListener("click", () => {
            this.startQuiz();
        }); */

        // check answer - by clicking Check button
        this.checkButton.addEventListener("click", () => {
            this.checkAnswer(); 
        }); 

        // restart 
        this.restartButton.addEventListener("click", () => {
            this.startQuiz(this.topic);
        }); 

        // check answer - by clicking Enter 
        this.answerInput.addEventListener("keydown", (event) => {
            if(event.key === "Enter") {
                this.checkAnswer();
            }
        });
    } 

    startQuiz(topic) {

        this.topic = topic; 
        this.questionManager = new QuestionManager(topic);

        this.modalController.open(); 

        this.questionArea.hidden = false; 
        this.result.hidden = true; 

        this.answerInput.value = "";
        this.feedback.textContent = ""; 

        this.currentQuestion = this.questionManager.start();

        this.displayQuestion(); 
    } 

    displayQuestion() {
        this.task.textContent = this.currentQuestion.task; 
        this.questionContent.innerHTML = this.currentQuestion.text; 

        if(this.currentQuestion.diagram) {
            this.geometryDiagram.hidden = false; 
            this.geometryDiagram.innerHTML = this.currentQuestion.diagram; 
            this.questionArea.classList.add("has-diagram"); 
        } else {
            this.geometryDiagram.hidden = true; 
            this.geometryDiagram.innerHTML = ""; 
            this.questionArea.classList.remove("has-diagram");
        }

        this.questionNumber.textContent = `Question ${this.questionManager.getCurrentQuestionNumber()} / ${this.questionManager.getTotalQuestions()}`; 
        this.score.textContent = `Score: ${this.questionManager.getScore()}`; 

        this.answerInput.value = ""; 
        this.feedback.textContent = ""; 

        this.checkButton.disabled = false; 

        this.answerInput.focus();
    }

    checkAnswer() {

        const userAnswer = this.answerInput.value; 

        if(userAnswer === "") {
            this.feedback.textContent = "Please enter your answer."; 
            return;
        } 

        const isCorrect = AnswerValidator.isCorrect(userAnswer, this.currentQuestion.answer); 

        if(isCorrect) {
            this.questionManager.addPoint(); 
            this.feedback.textContent = "✓ Correct!";
        } else {
            this.feedback.textContent = `✗ Not quite. The answer is ${this.currentQuestion.answer}.`; 
        } 

        this.score.textContent = `Score: ${this.questionManager.getScore()}`;  

        this.checkButton.disabled = true; 

        setTimeout(() => {
            this.checkButton.disabled = false; 

            if (this.questionManager.isComplete()) {
                this.showResults();
            } else {
                this.currentQuestion = this.questionManager.nextQuestion();
                this.displayQuestion();
            }
        }, 1000);
    } 

    showResults() {
        this.questionArea.hidden = true; 
        this.result.hidden = false; 

        const score = this.questionManager.getScore();
        const total = this.questionManager.getTotalQuestions(); 

        this.finalScore.textContent = `You got ${score} out of ${total} correct!`; 

        const percentage = (score / total) * 100; 

        if(percentage === 100) {
            this.finalMessage.textContent = "Perfect score! Excellent work!";
        } else if(percentage >= 80) {
            this.finalMessage.textContent = "Great job! Keep practicing!"; 
        } else if(percentage >= 60) {
            this.finalMessage.textContent = "Good effort! A little more practice will help."; 
        } else {
            this.finalMessage.textContent = "Keep practicing! You will get better with time."; 
        }
    } 
}