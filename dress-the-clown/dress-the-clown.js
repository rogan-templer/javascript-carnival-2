// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let headIndex = 0 // references the head - a cycle through the numbers 0-5 changes outfit type accordingly
let bodyIndex = 0 // ditto above
let shoesIndex = 0 // ditto above

let mainIndex = 0  // this is to reference the body overall: 0 = head, 1 = body 2 = shoes

let head = document.getElementById("head")
let body = document.getElementById("body")
let shoes = document.getElementById("shoes")

document.onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
    // up button
  } else if (e.keyCode == '40') {
    changeVertical(1)
    // down button
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    // left button
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
    // right button
  }
}




// This function will allow us to move up and down the body and target the 3 different parts.  Again the if statements will allow
// us to cycle through them without exceeding the options available.
function changeVertical(alter) {
  mainIndex += alter

  if (mainIndex < 0)
    mainIndex = 2

  if (mainIndex < 2)
    mainIndex = 0
}





// This function will allow us to alter an item of clothing.  The if statements contained will allow us to cycle through the options
// without exceeding the number of options available. 
// Note that this function is actually commented out - the reason for this is it only deal with the head - the code would need to be 
// duplicated for both the body and the shoes resulting in a lot or repeated code which is not ideal.  It has been retained to show the
// layout for a single entity for future reference.


// function changeHorizontal(alter) {

//   if (mainIndex == 0) {
//     headIndex += alter

//     if (headIndex < 0)
//       headIndex = 5

//     if (headIndex > 5)
//       headIndex = 0

//     head.src = "./images/head" + headIndex + ".png"
//   }


// }





//console.log("Dress The Clown!")

