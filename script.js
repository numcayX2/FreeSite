var intro = document.getElementById('intro');
var container = document.getElementById('container');
var introduce = document.getElementById('introduce');
var animation = document.getElementById('pulse-h1');
var navbar = document.getElementById('navbar');
var empty = document.getElementById('empty');

    setTimeout (() => {
      container.classList.remove('hidden');
      introduce.classList.remove('hidden');
    }, 2850)

    setTimeout (() => {
      empty.classList.remove('no-empty');
      empty.classList.add('empty');
      intro.classList.remove('active');
      intro.classList.add('de-active');
      animation.classList.remove('animate-pulse');
      navbar.classList.remove('navbar');
      navbar.classList.add('navbar-active');
    }, 3000)

