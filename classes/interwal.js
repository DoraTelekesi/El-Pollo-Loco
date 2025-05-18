let intervalIds = [];
let i = 1;


function setStoppableInterval(fn, time) {
  setInterval(fn, time);
  intervalIds.push(id);
}

setStoppableInterval(sayHello, 500); //Hallo 1, Hallo 2, Hallo 3...
setStoppableInterval(sayGoodbye, 500);


function stopGame() {
  //Intervalle beenden
  // clearInterval(2) //aber nicht immer die 2
  // clearInterval(interval)
  //wir können kein array zu clearInterval mitgeben
  // for (let index = 0; index < intervalIds.length; index++) {
  //     const id = intervalIds[index]
  //     clearInterval(id)

  // }

  //oder

  intervalIds.forEach(clearInterval);
}


function sayHello() {
  console.log("Hallo", i);
  i++;
}

function sayGoodbye() {
  console.log("Tschüss", i);
  i++;
}

/* Alternative (quick and dirty), um alle Intervalle zu beenden. */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) {
        window.clearInterval(i)}
  }