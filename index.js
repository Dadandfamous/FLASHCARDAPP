// card data 

let data = [{
  questionImage : './images/Question1-questionImage.png',
  answerImage : './images/Answer1-answerImage.png',
  class: 'easy'
}, {
  questionImage : './images/Question2-questionImage.png',
  answerImage : './images/Answer2-answerImage.png',
  class: 'easy'
}, {
  questionImage : './images/Question3-questionImage.png',
  answerImage : './images/Answer3-answerImage.png',
  class: 'easy'
}]


let random = Math.floor(Math.random()*3)

function displayQuestion(){

  // select element 
  let cardHtml = document.getElementById('easy')
  
  // reassign property, src 
  cardHtml.src = data[random].questionImage
}

function flipCard(){
  
  // select element 
  let cardHtml = document.getElementById('easy')

  // reassign property, src 
  cardHtml.src = data[random].answerImage
};

// function flipBack(){
  
//   // select element 
//   let cardHtml = document.getElementById('easy')

//   // reassign property, src 
//   cardHtml.src = data[random].questionImage
// };

function nextCard(){
  random = Math.floor(Math.random()*3)
  console.log(random)
  displayQuestion()
}

// if (data !== [data.questionImage]){
      displayQuestion()
// } if (data !== [data.answerImage]){
//       flipBack()
// } else {
//       flipBack()
// }

