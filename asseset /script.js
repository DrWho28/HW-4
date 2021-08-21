const startQuiz = document.getElementById("start-quiz")
const answerForm = document.getElementById("answer-form")
const timmer = document.getElementById("timmer")
const nextButton = document.getElementById("next")

const questionTitle = document.getElementById("question-title")
const answer1Lable = document.getElementById("answer-1-lable")
const answer2Lable = document.getElementById("answer-2-lable")
const answer3Lable = document.getElementById("answer-3-lable")
const answer4Lable = document.getElementById("answer-4-lable")
const answer1 = document.getElementById("answer-1")
const answer2 = document.getElementById("answer-2")
const answer3 = document.getElementById("answer-3")
const answer4 = document.getElementById("answer-4")


console.log('hello world')
 
const question =[
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

function quiz(){
    questionTitle.style.display = "initial"
    answerForm.style.display = "initial"
    timmer.style.display = "initial"
      
   answerForm.addEventListener("submit", (e)=>{
       e.preventDefault()
   })

    let correctAnswer = 0 
      
    question.forEach(question => {
       questionTitle.innerText = question.question
       answer1Lable.innerText = question.one
       answer2Lable.innerText = question.two
       answer3Lable.innerText = question.three
       answer4Lable.innerText = question.four
       
        
       while(nextQuestion){
       nextButton.addEventListener("click", (e) =>{
        e.preventDefault()
        if(question.answerNum === 1 && 
            answer1.checked === true
            ){
              correctAnswer++
              nextQuestion= true
        }
          
      })}
    })
}

startQuiz.addEventListener("click", (e) => {
      e.preventDefault()
      e.target.style.display="none"
      quiz()
})





