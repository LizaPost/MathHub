class QuestionFactory {

    static create(topic) {
        const generator = QuestionRegistry[topic]; 

        if (!generator) {
            throw new Error(`Unknown question topic: ${topic}`); 
        } 

        return generator();
    }
}