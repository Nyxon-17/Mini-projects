//Simon Game   

let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let btns = ["red", "green", "blue", "yellow"];

let h2 = document.querySelector("h2");
let body = document.querySelector("body");

document.addEventListener("keydown", () => {
  if (start == false) {
    start = true;
    levelUp();
  }
});


// gameSeq.forEach((color, idx) => {
//   if (idx == gameSeq.length - 1) {
//     btnFlash()
//   } 
// })

// Flash Button

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 400);
}

//repet sequence

// function repetFlash() {
//   gameSeq.forEach((color, idx) => {
//     setTimeout(() => {
//       let seq = document.querySelector(`#${color}`)
//       btnFlash(seq);
//     },idx*400);
//   });
// }

// input flash
function userFlash(btn) {
  if (start == true) {
    btn.classList.add("user");
    setTimeout(() => {
      btn.classList.remove("user");
    }, 200);
  }
}
//levelup

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIndx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIndx];
  let randomBtn = document.querySelector(`#${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);

  gameSeq.forEach((color, idx) => {
    setTimeout(() => {
      let seq = document.querySelector(`#${color}`)
      btnFlash(seq);
    }, idx * 400);

    if (idx == gameSeq.length) {
      btnFlash(randomBtn);
    }
  });
  // repetFlash(randomBtn);
}



//user click button
let allBtn = document.querySelectorAll(".btn")
for (all of allBtn) {
  all.addEventListener("click", function pressBtn() {
    if (start == true){
    }
    let btn = this;
    let colorId = btn.getAttribute("id");
    // console.log(colorId);
    userFlash(btn);
    userSeq.push(colorId);
    console.log(userSeq);
    checkUserInput(userSeq.length - 1);
  });


}


//function to check user input

function checkUserInput(idx) {
  if (gameSeq[idx] == userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }

  }
  else {
    h2.innerHTML = `Game Over Your Score <b>${level}</b> <br> Press any Button to Restart`
    resetGame();
    body.style.backgroundColor = "red";

    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 150);

  }
}

function resetGame() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
