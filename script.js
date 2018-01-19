(function () {
  'use strict';

  console.log('Wow wow wow');

  const game = {
    startTime: null,
    result: document.getElementById('result'),
    ans: document.getElementById('answer'),
    prob: document.getElementById('problem'),
    start: function (){
      game.startTime = new Date().getTime();
      game.prob.innerText = 'hoge';
      game.ans.onkeyup = game.judge;
    },
    judge: function (){
      console.log('ye');
      if (game.ans.value === game.prob.innerText){
        stop;
        console.log('judge matched');
      }
    },
    stop: function (){
      console.log('stop');
      let currentTime = new Date().getTime();
      let seconds = (currentTime - game.startTime) / 1000;
      game.result.innerText = seconds + ' s';
    }
  };

  if (confirm('OK?')) {
    game.start();
  }
})();