document.getElementById('changeColorBtn').onclick = function() {
    var colors = ['pink', 'lightgreen', 'lightblue', 'lavender'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }