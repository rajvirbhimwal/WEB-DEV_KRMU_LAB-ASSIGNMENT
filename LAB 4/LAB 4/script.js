const quizQuestions = [
    // --- EASY LEVEL ---
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What color is a banana?", answer: "yellow" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the chemical symbol for Oxygen?", answer: "O" },
    
    // --- MEDIUM LEVEL ---
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare" },
    { question: "What is the largest mammal in the world?", answer: "Blue Whale" },
    { question: "In which year did World War II end?", answer: "1945" },
    
    // --- HARD LEVEL ---
    { question: "What does HTML stand for? (Enter the full name)", answer: "hypertext markup language" },
    { question: "Who developed the theory of relativity?", answer: "Einstein" },
    { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
    { question: "What is the capital city of Australia?", answer: "Canberra" },
    
    // --- EXPERT LEVEL ---
    { question: "What is the derivative of sin(x)?", answer: "cos(x)" },
    { question: "How many planets in our solar system have no rings?", answer: "4" },
    { question : "What was the first programming language?", answer: "Fortran" },
    { question: "What year did the Titanic sink?", answer: "1912" },
    
    // --- LEGENDARY LEVEL ---
    { question: "What is the value of Planck's constant (h) to three decimal places?", answer: "6.626" },
    { question: "Who painted the ceiling of the Sistine Chapel?", answer: "Michelangelo" },
    { question: "What is the capital of Mongolia?", answer: "Ulaanbaatar" },
    { question: "In which year was the first Nobel Prize awarded?", answer: "1901" },

   
];

function runQuiz() {
    let playAgain = true;
    while (playAgain) {
        let score = 0; 
        for (let i = 0; i < quizQuestions.length; i++) {
            let userAnswer = prompt(`Question ${i + 1}/${quizQuestions.length}:\n${quizQuestions[i].question}`);
            if (userAnswer !== null) {
                let normalInput = userAnswer.toLowerCase().trim();
                let normalAnswer = quizQuestions[i].answer.toLowerCase().trim();

                if (normalInput === normalAnswer) {
                    alert("Correct!");
                    score++;
                } else {
                    alert(`Wrong! The correct answer was: ${quizQuestions[i].answer}`);
                }
            } else {
                alert("Question skipped.");
            }
        }
        alert(`Game Over!\nYour final score is: ${score} out of ${quizQuestions.length}`);
        playAgain = confirm("Do you want to play again?");
    }
    alert("Thanks for playing! Refresh the page if you change your mind.");
}
runQuiz();