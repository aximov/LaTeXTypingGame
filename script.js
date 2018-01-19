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
      document.body.onkeypress = game.stop;
      game.prob.innerText = '\\(\\pi\\)';
    },
    stop: function (){
      let currentTime = new Date().getTime();
      let seconds = (currentTime - game.startTime) / 1000;
      game.result.innerText = seconds + ' s';
    }
  };

  if (confirm('OK?')) {
    game.start();
  }

  function updateJudge(){
    let result = '';
    
    let time = totalTime();
    if (str === 'hoge') {
      result = 'Correct! ' + time + 's';
    }
    document.getElementById('result').innerText = result;
  }
})();