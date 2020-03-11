// factory functions are a way to construct objects with a template that... initializes some properties for every one of them.

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();
