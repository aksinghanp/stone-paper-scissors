const handOptions = {
  "rock": "imgs/Rock.png",
  "paper": "imgs/Paper.png",
  "scissors": "imgs/Scissors.png"
}

let SCORE1=0;
let SCORE2=0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";


  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors" || userHand == "rock" && cpHand == "paper" || userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE! against PC");
    setScore2(SCORE2 + 1);
    let img=document.querySelector("#computerPickImage");
    img.setAttribute("style","opacity:1;background-color: #075407;border-radius: 50%;height:300px;width:300px;box-shadow: 10px 10px 10px 10px #054305;");
  }
  else if (userHand == "paper" && cpHand == "rock" || userHand == "rock" && cpHand == "scissors" || userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN! against PC");
    setScore1(SCORE1 + 1);
    let nxt = document.querySelector(".nxt");
    nxt.style.display = "inline-block";
    let img=document.querySelector("#userPickImage");
    img.setAttribute("style","opacity:1;background-color: #075407;border-radius: 50%;height:300px;width:300px;box-shadow: 10px 10px 10px 10px #054305;");
  }
  else if (userHand == "paper" && cpHand == "paper" || userHand == "rock" && cpHand == "rock" || userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP");
    let replay=document.querySelector(".newGame");
    replay.innerText="REPLAY";
   }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  let replay=document.querySelector(".newGame");
    replay.innerText="PLAY AGAIN";

    let img1=document.querySelector("#userPickImage");
    img1.removeAttribute("style","opacity:1;background-color: #075407;border-radius: 50%;box-shadow: 10px 10px 10px 10px #054305;");

    let img2=document.querySelector("#computerPickImage");
    img2.removeAttribute("style","opacity:1;background-color: #075407;border-radius: 50%;box-shadow: 10px 10px 10px 10px #054305;");

    
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore1 = (newScore) => {
  SCORE1 = newScore;
  document.querySelector(".s1 h1").innerText = newScore;
}

const setScore2 = (newScore) => {
  SCORE2 = newScore;
  document.querySelector(".s2 h1").innerText = newScore;
}

const celebImg=()=>{
  let wrap = document.querySelector(".wrapper");
  wrap.style.display = "none";

  let rules =document.querySelector(".rules-btn");
  rules.style.display="none";

  let nxt =document.querySelector(".nxt");
  nxt.style.display="none";

  let celeb=document.querySelector(".celeb");
  celeb.style.display="flex";
}

const reGame=()=>{
  let celeb = document.querySelector(".celeb");
  celeb.style.display = "none";

  let wrap = document.querySelector(".wrapper");
  wrap.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";  

  let rules =document.querySelector(".rules-btn");
  rules.style.display="inline-block";

  let replay=document.querySelector(".newGame");
    replay.innerText="PLAY AGAIN";

  let img1=document.querySelector("#userPickImage");
    img1.removeAttribute("style","opacity:1;background-color: #075407;border-radius: 50%;box-shadow: 10px 10px 10px 10px #054305;");

  let img2=document.querySelector("#computerPickImage");
    img2.removeAttribute("style","opacity:1;background-color: #075407;border-radius: 50%;box-shadow: 10px 10px 10px 10px #054305;");


  SCORE1=0;
  SCORE2=0;  
  document.querySelector(".s1 h1").innerText = 0;
  document.querySelector(".s2 h1").innerText = 0;



}

const renderRules=()=>{
  let rulesimg  = document.querySelector(".rulesimg");
  rulesimg.style.display = "flex";
}

const hideRules=()=>{
  let rulesimg  = document.querySelector(".rulesimg");
  rulesimg.style.display = "none";
}


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();