class AnswerValidator {

    static isCorrect(userAnswer, correctAnswer) {
        return Number(userAnswer) === Number(correctAnswer);
    } 
    
}