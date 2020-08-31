console.log("LetsUpgrade JS Assignment : Day6 - Question 1");

let color = ["blue", "green", "yellow", "red", "orange"];

  function changeColor() {
    setTimeout(function loop() {
      document.bgColor = color.shift();
      if (color.length) {
        setTimeout(loop, 5000);
      }
    }, 5000);
  }

  function start() {
    setInterval(changeColor(), 5000);
  }