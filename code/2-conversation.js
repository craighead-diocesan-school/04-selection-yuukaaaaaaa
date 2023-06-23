// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  alert('Do you like cycling? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
  }

  alert('Goodbye')
}

function age() {
 let age = Number(promot('How old are you?'))

 if (age > 65) {
  alert('You can retire')
 }
 if ( age < 5){
  alert('You need surpervision when you use a computer')
 }
 if (age >= 18) {
  alert("You're old enough to vote")
 }
 if (age !=15) {
  alert("You're not the same age as me")
 }

}
