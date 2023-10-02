var intro = document.getElementById('intro');
var container = document.getElementById('container');
var introduce = document.getElementById('introduce');
var animation = document.getElementById('pulse-h1');
var footer = document.getElementById('footer');

    setTimeout (() => {
      container.classList.remove('hidden');
      introduce.classList.remove('hidden');
      footer.classList.remove('hidden');
    }, 2850)

    setTimeout (() => {
      intro.classList.remove('active');
      intro.classList.add('de-active');
      animation.classList.remove('animate-pulse');
    }, 3000)

