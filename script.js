(function () {
  'use strict';

  console.log('Wow wow wow');

  const arr = ['\\pi', '\\frac{8\\pi h\\nu^3}{c^3}\\frac{1}{\\exp\\left(\\frac{h\\nu}{k_{\\mathrm{B}}T}\\right)-1}', '\\xi', '\\frac{1}{\\sqrt{2\\pi\\sigma^2}}\\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)', '\\alpha', '\\beta', '\\varepsilon', '\\Gamma', '\\rho', '\\epsilon', 'n(r)=n_0\\left[1+\\left(\\frac{r}{r_c}\\right)^2\\right]^{-3/2}'];
  const game = {
    startTime: null,
    result: document.getElementById('result'),
    ans: document.getElementById('answer'),
    prob: document.getElementById('problem'),
    ex: document.getElementById('example'),
    correct: document.getElementById('correct'),
    rand: null,
    expr: null,
    clock: null,
    watcher: null,
    start: function () {
      game.rand = Math.floor(Math.random()*arr.length);
      game.expr = arr[game.rand];
      game.startTime = new Date().getTime();
      game.prob.innerText = '\\(' + game.expr + '\\)';
      game.ex.innerText = game.expr;
      game.clock = setInterval(game.update, 1);
      game.ans.onkeyup = game.judge;
    },
    update: function () {
      var currentTime = new Date().getTime();
      var seconds = (currentTime - game.startTime) / 1000;
      game.result.innerText = seconds + ' s';
    },
    judge: function () {
      console.log('judging');
      if (game.ans.value !== '' && game.ans.value === game.expr){
        game.stop();
      }
    },
    stop: function () {
      console.log('stop!');
      clearInterval(game.clock);
      game.correct.innerHTML = '<span  class="badge badge-success">Correct!</span>';
      game.ans.onkeyup = null;
    }
  };

  game.ans.focus();
  game.start();
  
})();