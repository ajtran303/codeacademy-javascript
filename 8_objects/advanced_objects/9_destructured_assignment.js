// destructured assignment allows for less typing when accessing an object's properties

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;

// that leads to another shortcut....

functionality.beep();
