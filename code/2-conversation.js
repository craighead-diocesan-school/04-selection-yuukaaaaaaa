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
  alert('How old are you?')
  let age = Number(prompt())
  if (age < 1) {
    alert('The age is invalid.')
  }
  if (age > 130) {
    alert('The age is invalid.')
  }
  if (age < 5 && age >= 1) {
    alert('You need supervision when using a computer.')
    alert('Also, you are not the same age as me.')
  }
  if (age > 65 && age <= 130) {
    alert('You can retire.')
    alert('Also, you are not the same age as me.')
  }
  if (age >= 18) {
    alert('You are old enough to vote.')
    alert('Also, you are not the same age as me.')
  }
  if (age != 16 && age >= 5 && age < 18) {
    alert('You are not the same age as me.')
  }


}
