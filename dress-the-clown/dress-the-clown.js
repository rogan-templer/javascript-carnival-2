// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// let headIndex = 0 // references the head - a cycle through the numbers 0-5 changes outfit type accordingly
// let bodyIndex = 0 // ditto above
// let shoesIndex = 0 // ditto above

// Above you can see 3 separate indexes commented out - they have been combined below into a single index allowing us to tighten up our
// function further down - each 0 represents each index i.e. head, body and shoes.

let indexes = [0, 0, 0]

let mainIndex = 0  // this is to reference the body overall: 0 = head, 1 = body 2 = shoes and starts at 0

let head = document.getElementById("head")
let body = document.getElementById("body")
let shoes = document.getElementById("shoes")

// This array allows us to target image.src and change the image according to position in the array. Previously we targeted only the 
// head image or body image but now we are able to pick and choose according to where we are within the mainIndex
let images = [head, body, shoes]
let strings = ["head", "body", "shoes"]

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

function changeHorizontal(alter) {

  // new variable called index, we are ref. which ever index we are working with (indexes) and passing in the main index so we know where on the body we are working.
  let index = indexes[mainIndex]
  // new variable image - this ref the images depending what section we are working with (head body or shoes) and passes in the main index.
  let image = images[mainIndex]
  let str = strings[mainIndex]

  index += alter

  if (index < 0)
    index = 5

  if (index > 5)
    index = 0

  indexes[mainIndex] = index

  image.src = "./images/" + str + index + ".png"
}

// This function will allow us to move up and down the body and target the 3 different parts.  Again the if statements will allow
// us to cycle through them without exceeding the options available.
function changeVertical(alter) {
  mainIndex += alter

  if (mainIndex < 0)
    mainIndex = 2

  if (mainIndex > 2)
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

