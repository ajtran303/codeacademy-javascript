// ES6 lets us use destructuring to turn function factory property assignment into a shorthand

function robotFactory(model, mobile){
  return {
    model, // look here
    mobile, // and here
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
