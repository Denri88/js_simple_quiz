// Array of questions and answers below

var questions = [
["How many countries are there in the US? ", 50],
["How many continents are there?" , 7],
["How many legs do insects have?", 6]
];


//variables needed for correct and incorrect arrays, prompt response, and correct answer counter

var correctAnswers = 0;
var correct = [];
var incorrect = [];
var response;
var answer;
var question;
var html;


// Display the correct answers in an ordered list

function orderList(arr){
  var buildList = '<ol>';
  for(var i = 0; i < arr.length; i+=1){
    buildList += '<li> ' + arr[i] + ' </li>';
    
  }
  buildList+= '</ol>';
  return buildList;
}

// Test the correct response

for (var i = 0; i < questions.length; i+=1){
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(questions[i][0]);
  response = parseInt(response);
  if(response == answer){
    correctAnswers +=1;
    correct.push(question);
  } else {
  incorrect.push(question);
  }
}


function print(message) {
var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

html = 'You have ' + correctAnswers + ' correct answers';
html += '<h2> Your correct answers: </h2>';
html += orderList(correct);
html += '<h2> Your wrong answers: </h2>';
html += orderList(incorrect);
print(html);