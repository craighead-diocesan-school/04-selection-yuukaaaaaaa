// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  //Unless they say stop, keep asking for a number and tell if that number is greater or less than two.
  let goOrnot ='hdouw'
  while(goOrnot != 'Stop!'){
   let number = Number(prompt('What number do you want to conpare to 2?'))
   if (number > 2) {
     alert(number + ' is more than 2')
  }
   else{
    alert(number +' is less than 2')
  }
  goOrnot = prompt("Do you want to keep going or stop? If you want to stop, write down 'Stop!")
}
}

