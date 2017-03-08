var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var incorrect = [];
var correct = [];
var question;
var answer;
var response;
var html;

function buildList(arr){
  var orderList = '<ol>';
  for(var i = 0; i < arr.length; i+=1){
  orderList += '<li>' + arr[i] + '</li>';
  }
  orderList += '</ol>';
  return orderList;
}

function print(message) {
var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers +=1;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2> Your Correct Answers: </h2>';
html+= buildList(correct);
html += '<h2> Your Incorrect Answers: </h2>';
html+= buildList(incorrect);
print(html);
