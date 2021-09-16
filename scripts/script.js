/**
 * Adds 16*16 grid of square divs to DOM
 */
function makeGrid() {
  const divSketch = document.querySelector('#container-sketch');
  // Create square div
  const divSquare = document.createElement('div');
  divSquare.classList.add('grid-square');
  divSketch.appendChild(divSquare);
}

// Make 16*16 grid on load
makeGrid();