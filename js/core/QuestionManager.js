class QuestionManager {

    constructor(topic, totalQuestions = 10) {
        this.topic = topic; 
        this.totalQuestions = totalQuestions; 
        this.currentQuestion = 0; 
        this.score = 0;
    } 

    start() {
        this.currentQuestion = 0; 
        this.score = 0; 

        return this.nextQuestion();
    } 

    nextQuestion() {
        if (this.currentQuestion >= this.totalQuestions) {
            return null;
        } 

        this.currentQuestion++;

        return QuestionFactory.create(this.topic);
    } 

    addPoint() {
        this.score++;
    } 

    isComplete() {
        return this.currentQuestion >= this.totalQuestions; 
    } 

    getCurrentQuestionNumber() {
        return this.currentQuestion;
    } 

    getScore() {
        return this.score;
    } 

    getTotalQuestions() {
        return this.totalQuestions;
    }
}