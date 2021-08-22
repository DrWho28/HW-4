const startQuiz = document.getElementById("start-quiz")
const answerForm = document.getElementById("answer-form")
const timmer = document.getElementById("timmer")
const nextButton = document.getElementById("next")
const quitButton = document.getElementById("quit")
var startTime = 10


const questionTitle = document.getElementById("question-title")
const answer1Lable = document.getElementById("answer-1-lable")
const answer2Lable = document.getElementById("answer-2-lable")
const answer3Lable = document.getElementById("answer-3-lable")
const answer4Lable = document.getElementById("answer-4-lable")
const answer1 = document.getElementById("answer-1")
const answer2 = document.getElementById("answer-2")
const answer3 = document.getElementById("answer-3")
const answer4 = document.getElementById("answer-4")

const question = [
    {
        question: "What is 2 + 2?",
        answerNum: 4,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },

    {
        question: "What is 2 * 6 ?",
        answerNum: 12,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },
    {
        question: "What is 2 + 7?",
        answerNum: 9,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },
    {
        question: "What is 2 + 0?",
        answerNum: 2,
        one: "2",
        two: "4",
        three: "9",
        four: "12"
    },
]

questionTitle.style.display = "none"
answerForm.style.display = "none"
timmer.style.display = "none"

function quiz() {
    questionTitle.style.display = "initial"
    answerForm.style.display = "initial"
    timmer.style.display = "initial"

    answerForm.addEventListener("submit", (e) => {
        e.preventDefault()
    })

    questionNum = 0

    questionTotal = questions.length

    let correctAnswers = 0

    question.forEach(question => {
        questionTitle.innerText = question.question
        answer1Lable.innerText = question.one
        answer2Lable.innerText = question.two
        answer3Lable.innerText = question.three
        answer4Lable.innerText = question.four

        while (nextQuestion) {
            nextButton.addEventListener("click", (e) => {
                e.preventDefault()
                if (question.answerNum === 1 &&
                    answer1.checked === true
                ) {
                    correctAnswer++
                    nextQuestion = true
                }

            })
        }
    })
}

startQuiz.addEventListener("click", (e) => {
    e.preventDefault()
    e.target.style.display = "none"
    quiz()
})

function checkTimmer() {
    if (startTime === 0) {
        questionTitle.innerText = `You did not complete the quiz in time`
        answersForm.style.display = "none"
        timer.style.display = "none"
        startQuiz.style.display = "initial"
    }
}

setInterval(() => {
    startTime--
    timmer.innerText = `${startTime} Seconds Left`
    checkTimmer()
}, 1000);

//decrease time function
function decreaseTimer() {
    startTime - 10
}
function stageNextQuestion(index, correct) {
    console.log(`Index: ${index} Correct Answers: ${correctAnswers}`)

    correct ? correctAnswers++ : decreaseTimer()

    if (index === (questionTotal)) {
        console.log('quiz completed')
        questionTitle.innerText = `You have completed the quiz with a score of ${(correctAnswers / questionTotal) * 100}%`
        answersForm.style.display = "none"
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

answersForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted')

    let question = questions[questionNum]
    console.log(question.answerNum)

    switch(question.answerNum){
        case 1:

            questionNum++

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
    answersForm.style.display = "none"
    timer.style.display = "none"
    startQuiz.style.display = "initial"
})



startQuiz.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.style.display = "none"

    quiz()
})