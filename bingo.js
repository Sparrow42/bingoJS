async function newGameButton() {
  const ballNumArr = generateBingo()
    .then((xs) => {
      console.log('generateBingo comp');
      newGame.disabled = false;
      nextBall.disabled = false;
      resolve(xs);
    }).catch(() => {
      newGame.disabled = false;
      nextBall.disabled = true;
    });
  }

  async function nextBallButton() {
    
  }

    console.log(ballNumArr);

    const nextBall = document.getElementById('next-ball');
    const newGame = document.getElementById('new-game');

    // function buttonDisabledToggle(){
    //   return new Promise((resolve, reject) => {
    //     resolve();
    //   });
    // }

    // const result = buttonDisabledToggle()
    //   .then(() => {
    //     console.log(xs);
    //     newGame.disabled = false;
    //     nextBall.disabled = false;
    //   }).catch(() => {
    //     console.log('bb');
    //     newGame.disabled = false;
    //     nextBall.disabled = true;
    //   })
    // return new Promise().then(() => {
    //   console.log('aa');
    //   newGame.disabled = false;
    //   nextBall.disabled = false;
    // }).catch(() => {
    //   newGame.disabled = false;
    //   nextBall.disabled = true;
    // })