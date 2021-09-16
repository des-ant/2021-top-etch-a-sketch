/**
 * Adds 16*16 grid of square divs to DOM
 * @param  {number} [numSquares] Number of squares per side in grid
 */
function makeGrid(numSquares) {
  // Access CSS variables for grid columns and rows
  const htmlStyles = window.getComputedStyle(document.querySelector('html'));

  // Variables to set number of rows and columns in grid
  let rowNum, colNum;

  // Update variables if input is given
  if (numSquares && typeof (numSquares) === 'number' &&
    numSquares > 0 && numSquares <= 100
  ) {
    rowNum = numSquares;
    colNum = numSquares;
    document.documentElement.style.setProperty('--rowNum', numSquares);
    document.documentElement.style.setProperty('--colNum', numSquares);
  } else {
    // Use value of CSS variables for grid columns and rows
    rowNum = parseInt(htmlStyles.getPropertyValue('--rowNum'));
    colNum = parseInt(htmlStyles.getPropertyValue('--colNum'));
  }

  const divSketch = document.querySelector('#container-sketch');
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
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
  // Get and validate input for number of squares per side for new grid
  // Reset grid if user clicks cancel
  let numSquaresInput = prompt("How many squares per side?\nPlease enter a number between 0 and 100");
  while (numSquaresInput !== null && isNaN(parseInt(numSquaresInput)) ||
    parseInt(numSquaresInput) < 0 || parseInt(numSquaresInput) > 100
  ) {
    numSquaresInput = prompt("How many squares per side?\nPlease enter a number between 0 and 100");
  }
  const numSquares = parseInt(numSquaresInput);

  makeGrid(numSquares);
}

/**
 * Initialise event listeners for buttons
 */
function initialiseEvents() {
  const btnReset = document.querySelector('#btn-reset');
  btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    resetGrid()
  });
}

initialiseEvents();