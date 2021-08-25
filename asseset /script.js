const startQuiz = document.getElementById("start-quiz")
const answerForm = document.getElementById("answers-form")
const timmer = document.getElementById("timer")
const nextButton = document.getElementById("next")
const quitButton = document.getElementById("quit")
var startTime = 50
const storage = window.localStorage


const questionTitle = document.getElementById("question-title")
const answer1Label = document.getElementById("answer-1-label")
const answer2Label = document.getElementById("answer-2-label")
const answer3Label = document.getElementById("answer-3-label")
const answer4Label = document.getElementById("answer-4-label")
const answer1 = document.getElementById("answer-1")
const answer2 = document.getElementById("answer-2")
const answer3 = document.getElementById("answer-3")
const answer4 = document.getElementById("answer-4")

const questions = [
    {
        question: "What is 2 + 2?",
        answerNum: 2,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },

    {
        question: "What is 2 * 6 ?",
        answerNum: 4,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },
    {
        question: "What is 2 + 7?",
        answerNum: 3,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },
    {
        question: "What is 2 + 0?",
        answerNum: 1,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },
]

questionTitle.style.display = "none"
answerForm.style.display = "none"
timmer.style.display = "none"

//quiz function
function quiz(){
    questionTitle.style.display = "initial"
    answerForm.style.display = "initial"
    timer.style.display = "initial"


    //initialize question num counter to keep track of "questions" array index
    let questionNum = 0


    //intialize total amount of questions to keep track of 
    let questionTotal = questions.length


    //initialize total amount of questions correct
    let correctAnswers = 0


    //initialize amount of time
    let startTime = 50


    //initialize first question
    questionTitle.innerText = questions[0].question
    answer1Label.innerText = questions[0].one
    answer2Label.innerText = questions[0].two
    answer3Label.innerText = questions[0].three
    answer4Label.innerText = questions[0].four


    //check timer
    function checkTimer(){
        if(startTime === 0){
            questionTitle.innerText = `You did not complete the quiz in time`
            answerForm.style.display = "none"
            timer.style.display = "none"
            startQuiz.style.display = "initial"
        }
    }


    //starting timer
    setInterval(() => {
        startTime--
        timer.innerText = `${startTime} Seconds Left`
        checkTimer()
    }, 1000)


    //decrease time function
    function decreaseTimer(){
        startTime -= 10
    }


    //go to next question
    function stageNextQuestion(index, correct){
        console.log(`Index: ${index} Correct Answers: ${correctAnswers}`)


        //if the answer is correct, increase the number of correct answers
        correct ? correctAnswers++ : decreaseTimer()


        //if there are no more questions, bring up some text and the start button
        if(index === (questionTotal)){
            console.log('quiz completed')
            questionTitle.innerText = `You have completed the quiz with a score of ${(correctAnswers / questionTotal) * 100}%`
            answerForm.style.display = "none"
            timer.style.display = "none"
            startQuiz.style.display = "initial"
            return 
        }


        //stage the next question to be answered
        console.log(`Question Number ${index + 1} after question ${index} was ${correct}`)
        questionTitle.innerText = questions[index].question
        answer1Label.innerText = questions[index].one
        answer2Label.innerText = questions[index].two
        answer3Label.innerText = questions[index].three
        answer4Label.innerText = questions[index].four
    }


    //create an event listener on the submission of the form, which will fire when the 
    //next button is pressed
    answerForm.addEventListener('submit', (e) => {
        e.preventDefault()


        let question = questions[questionNum]
        console.log(question.answerNum)


        //find out what the correct answer is according to the question object, and then
        //check to see if the user selected that question
        switch (question.answerNum){
            case 1:
                //change the question number that we're on since they selected an answer
                questionNum++
                
                //if they were correct, go to the next question and mark it correct, otherwise, mark it wrong
                answer1.checked ? stageNextQuestion(questionNum, true) : stageNextQuestion(questionNum, false)
                break;
            
            case 2:
                questionNum++
                answer2.checked ? stageNextQuestion(questionNum, true) : stageNextQuestion(questionNum, false)
                break;


            case 3:
                questionNum++
                answer3.checked ? stageNextQuestion(questionNum, true) : stageNextQuestion(questionNum, false)
                break;


            case 4:
                questionNum++
                answer4.checked ? stageNextQuestion(questionNum, true) : stageNextQuestion(questionNum, false)
                break;


            default:
                alert("Please select an answer")
        }
    })


    quitButton.addEventListener('click', (e) => {
        e.preventDefault()
        questionTitle.style.display = "none"
        answerForm.style.display = "none"
        timer.style.display = "none"
        startQuiz.style.display = "initial"
    })
}
//when you start the quiz, the first answer will pop up
startQuiz.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.style.display = "none"

    quiz()
})



