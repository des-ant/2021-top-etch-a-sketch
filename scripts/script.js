/**
 * Adds 16*16 grid of square divs to DOM
 */
function makeGrid() {
  const divSketch = document.querySelector('#container-sketch');
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      // Create square div
      const divSquare = document.createElement('div');
      divSquare.classList.add('grid-square');

      // Change color of square when mouse hovers over
      divSquare.addEventListener('mouseenter', (e) => changeBgColorOnHover(e));

      // Add to sketch container div
      divSketch.appendChild(divSquare);
    }
  }
}

// Make 16*16 grid on load
makeGrid();

/**
 * Change color of div on when mouse hovers over it
 * @param  {event} e Mouse enter event
 */
function changeBgColorOnHover(e) {
  const gridHovered = e.currentTarget;
  gridHovered.classList.add('grid-square-enter');
}

/**
 * Reset grid
 */
function resetGrid() {
  const divSketch = document.querySelector('#container-sketch');
  while (divSketch.firstChild) {
    divSketch.removeChild(divSketch.firstChild);
  }
  makeGrid();
}

/**
 * Initialise event listeners for buttons
 */
function initialiseEvents() {
  const btnReset = document.querySelector('#btn-reset');
  btnReset.addEventListener('click', (e) => {e.preventDefault(); resetGrid()});
}

initialiseEvents();