// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  //Ask for the name and the capital of France and say That's right + name if it is correct, say That't not right + if it's not correct..
  let name = prompt("What's your name?")
  let france = prompt('Quick question,'+ name + '. What is the capital of France?')

  if (france == 'Paris'){
    alert("That's right,"+ name)
  }
  else{
    alert("That's not right," + name)
  }
}
