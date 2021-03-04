// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let cells = document.getElementsByTagName('td') // access all the cells in the table.

let randomIndex = Math.floor(Math.random() * cells.length); //generates a random cell number according to the table.

let randomCell = cells[randomIndex] // this will access a random cell.


//make mole element appear in a random cell:

let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = "mole"
randomCell.appendChild(mole)

mole.onclick = whackedMole // this triggers the whackedMole function when mole is clicked.

//below is the whackedMole function - Note in the function we are referencing the randomIndex, randomCell & appendChild
// which are referenced above.  We do not need to creat new functions or calls but can reuse them within the function itself so that they are triggered by the click action on the page.
function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  let audio = new Audio('./whack-audio.wav');
  audio.play()
}

