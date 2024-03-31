let questions = new Array();
let index=0;
let score =0;
let crca ;
let choosea;
let userAnswers = new Array();
async function fetchdata(params) {
    
    const url = "https://opentdb.com/api.php?amount=10&type=multiple";
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    let results = data['results'];
    // let questions = new Array();
    
    results.forEach(element => {
      var obj= {};
        obj.q=element.question;
        obj.cans=element.correct_answer;
        obj.wans=element.incorrect_answers;
        questions.push(obj)
        console.log(obj);
        
    });
    showQuestion();
    console.log(questions);
  
  }

  fetchdata();

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function showQuestion() {
if (index<10){
    let qu = document.getElementById("question");
    let opt1 = document.getElementById("option1");
    let opt2 = document.getElementById("option2");
    let opt3 = document.getElementById("option3");
    let opt4 = document.getElementById("option4");
    qu.innerHTML=questions[index].q;
    let options = new Array();
    crca=questions[index].cans
    options.push(questions[index].cans);
    options.push(questions[index].wans[0]);
    options.push(questions[index].wans[1]);
    options.push(questions[index].wans[2]);
    console.log(options);
    options=shuffle(options);
    // console.log(options[0]);
  opt1.innerHTML=options[0];
  opt2.innerHTML=options[1];
  opt3.innerHTML=options[2];
  opt4.innerHTML=options[3];
}
else{
  compl();
}
  }

  function opt1click(params) {
    choosea = document.getElementById("option1").innerHTML;
    
  }
  function opt2click(params) {
    choosea = document.getElementById("option2").innerHTML;
  }
  function opt3click(params) {
    choosea = document.getElementById("option3").innerHTML;
  }
  function opt4click(params) {
    choosea = document.getElementById("option4").innerHTML;
  }
  function clicke(){
    if (choosea == crca){
      score++;
    }
    document.getElementById("score").innerHTML=score;
    index++;
    userAnswers.push(choosea);
    showQuestion();
  }

  function compl(params) {
    document.getElementById("next").hidden = true;
    var container = document.getElementById("box");
  // clear its contents
  container.innerHTML = "";
  // create a new h2 element
  var h2 = document.createElement("h1");
  // set its text content
  h2.textContent = "Your Score is :"+score;
  // append it to the container
  container.appendChild(h2);
    
  


  for (let i = 0; i < questions.length; i++) {
    // create a new div for each question
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    // create a new h2 element for the question
    var questionH2 = document.createElement("h2");
    questionH2.textContent = questions[i].q;
    questionDiv.appendChild(questionH2);

    // create a new p element for the user's selected answer
    var userAnswerP = document.createElement("p");
    userAnswerP.textContent = "Your answer: " + userAnswers[i];
    questionDiv.appendChild(userAnswerP);

    // create a new p element for the correct answer
    var correctAnswerP = document.createElement("p");
    correctAnswerP.textContent = "Correct answer: " + questions[i].cans;
    questionDiv.appendChild(correctAnswerP);

    container.appendChild(questionDiv);
  }

  }

  function showAllQuestions() {
    var container = document.getElementById("box");
    // clear its contents
    container.innerHTML = "";
  
    
  }