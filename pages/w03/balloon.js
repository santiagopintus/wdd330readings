let isGameOver = false;

const mainBalloon = () => {
  let balloon = document.getElementById("balloon");

  document.body.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        inflateBalloon(balloon);
        break;
      case "ArrowDown":
        e.preventDefault();
        deflateBalloon(balloon);
        break;
      case "KeyR":
        e.preventDefault();
        resetGame(balloon);
        break;
      default:
        break;
    }
  });
};

const inflateBalloon = (balloon) => {
  let currentSize = getBalloonSize(balloon);
  if (isModifiable(currentSize, true)) {
    setBalloonSize(balloon, currentSize * 1.1);
  } else {
    balloon.textContent = "💥";
    isGameOver = true;
  }
  animateKey("arrowUp");
};

const deflateBalloon = (balloon) => {
  let currentSize = getBalloonSize(balloon);
  if (isModifiable(currentSize, false)) {
    setBalloonSize(balloon, currentSize * 0.9);
  }
  animateKey("arrowDown");
};

const getBalloonSize = (balloon) => {
  let size = parseInt(balloon.style.fontSize.split("p")[0]);
  return size;
};

const setBalloonSize = (balloon, size) => {
  balloon.style.fontSize = `${size}px`;
};

const isModifiable = (size, inf) => {
  /* If we are inflating check if reached its max size */
  if (isGameOver) return false;
  else if (inf) return size < 110;
  else return size > 14;
};

const resetGame = (balloon) => {
  balloon.textContent = "🎈";
  setBalloonSize(balloon, 16);
  animateKey("rKey");
  isGameOver = false;
};

const animateKey = (id) => {
  let arrow = document.getElementById(id);
  let newClass = isGameOver ? "error" : "pressed";
  arrow.classList.add(newClass);
  setTimeout(() => {
    arrow.classList.remove(newClass);
  }, 500);
};

document.addEventListener("DOMContentLoaded", mainBalloon);
