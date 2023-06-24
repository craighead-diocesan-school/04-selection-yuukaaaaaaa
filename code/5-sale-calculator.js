// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  alert('How much money do you have to spend?')
  let spend = Number(prompt())
  alert('How much is the item normally?')
  let item = Number(prompt())
  alert('And what is the discount percentage?')
  let discount = Number(prompt())
  let price = 0.01 * (100 - discount) * item
  
  

  if(spend >= price) {
    alert("You have enough. You have $ " + spend + ' to spend, and with ' + discount + '% off, $' + item + ' comes down to $' + price + '.')
  }
  else{
    alert("You don't have enough. You have $ " + spend + ' to spend, but even with ' + discount +'% off, $' + item + ' only comes down to $' + price + '.')
  }
  // write your code here
}
