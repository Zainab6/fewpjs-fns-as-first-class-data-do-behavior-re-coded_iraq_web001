/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString) {
  const e =parseInt(timeString);
  if (e <12 ) {
    return "Good Morning";
  }
  else if (e >12 && e < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage() {
<<<<<<< HEAD
  let greeting = document.getElementById("greeting");
  console.log(greeting);
  greeting.innerText ="Good Morning";
  greeting.innerText = "Good Afternoon";
  greeting.innerText = "TEST";
}
=======
   let testContent = "TEST";
   let content = document.getElementById("greeting ");
  if (content = testContent) {
    console.log ("Good Morning");
    console.log ("Good Afternoon");
    console.log ("Good Evening");
  }
  
}
>>>>>>> 545c0146b3153592626043838c3282465911f5b6
