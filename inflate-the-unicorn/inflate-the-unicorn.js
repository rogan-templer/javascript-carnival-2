// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// The three lines of code below allow us to access each unicorn picture by their id - this is assigned on the HTML file under id
// The '.onclick = clicked' means that they will react when they are clicked on by the mouse button.  How they react will be determined by
// the clicked function on line 20.  So in essence this entire line is looking at the clicked function and will take its queues from there.
document.getElementById("uni0").onclick = clicked
document.getElementById("uni1").onclick = clicked
document.getElementById("uni2").onclick = clicked


// Here the inflation of the balloon is established.  An array is created and the 3 zeros in it are representative of the 3 different pictures with the ballon at various stages of inflation.  We will use this further down to change the balloons inflated status with each click.
let inflation = [0, 0, 0]

// This is the function that will carry out all of the activity on this page.
// Event is passed into the function - this represents the actual click that is registered on the page and we can run a number of different actions off this event.
// 1. unicorn is defined as event.target -> what this means is when the unicorn is clicked it generates a target element in the browser so we can use that to correspond to the unicorn which was clicked and know which was clicked.
// let id defines which unicorn picture id is being used - note unicorn.id then refers to the id class on each unicorn and the 3 in the [] refers to the 4th item in that id class which is the number on each id.

function clicked(event) {
  let unicorn = event.target
  let id = unicorn.id[3]

  // inflation[id]++ is then going to increase the inflation of the balloon with each click - the id part is looking at the id defined above in the let statement.

  inflation[id]++

  // This if statement is in place to tell the balloons when to reset after hitting their max inflation. back up at let inflation note there are only 3 in the array this means that if the clicks hit a 4th click the ballon will reset to its original position - hence inflation[id] = 0  

  if (inflation[id] == 4)
    inflation[id] = 0

  // The final part here is what drives the change in picture.  unicorn.src access that property onf the element and the + inflation[id] in the middle is what changes the picture state through out the inflation process with each click.

  unicorn.src = "./images/unicorn-" + inflation[id] + ".png"
}





