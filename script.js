(function () {
  'use strict';

  console.log('Wow wow wow');

  const arr = ['\\(\\pi\\)', '\\(\\frac{8\\pi h\\nu^3}{c^3}\\frac{1}{\\exp\\left(\\frac{h\\nu}{k_{\\mathrm{B}}T}\\right)-1}\\)', '\\(\\xi\\)', '\\(\\frac{1}{\\sqrt{2\\pi\\sigma^2}}\\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)\\)'];
  const game = {
    startTime: null,
    result: document.getElementById('result'),
    ans: document.getElementById('answer'),
    prob: document.getElementById('problem'),
    rand: null,
    expr: null,
    start: function () {
      game.rand = Math.floor(Math.random()*arr.length);
      game.expr = arr[game.rand];
      game.startTime = new Date().getTime();
      game.prob.innerText = game.expr;
      game.ans.onkeyup = game.judge;
    },
    judge: function () {
      console.log('ye');
      if ('\\(' + game.ans.value + '\\)' === game.expr){
        game.stop();
      }
    },
    stop: function () {
      let currentTime = new Date().getTime();
      let seconds = (currentTime - game.startTime) / 1000;
      game.result.innerText = seconds + ' s';
    }
  };

  game.ans.focus();
  game.start();
  
})();