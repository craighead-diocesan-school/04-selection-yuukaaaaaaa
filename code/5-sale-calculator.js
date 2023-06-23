// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let spend = Number(prompt('How much money do you have to spend?'))
  let item = Number(prompt('How much is the item normally?'))
  let discount = Number(prompt('And what is the discount percentage?'))
  ddiscount = discount * 0.01
  price = item * ddiscount
  

  if(spend > price) {
    alert("You have enough. You have " + spend + ' to spend, and with' + discont + '% off, $' + item + ' comes down to $' + price + '.')
  }
  else{
    alert("You don't have enough. You have " + spend + ' to spend, but even with ' + discount +'% off, $' + item + ' only comes down to $' + price + '.')
  }
  // write your code here
}
