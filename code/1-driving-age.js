// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  // Ask their age and says they can drive if they are over 16 and if they are less than 16, says that they're not old enough to drive.
  alert('How old are you?')
  let age = Number(prompt())
  if (age > 16) {
    alert("You're old enough to drive.")
  } else{
    alert("You're not old enough to drive.")
  }
}
