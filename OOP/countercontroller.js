


class CounterController {
  constructor () {
    this.counterArray = [];
    this.overFlowHandler = this.overFlowHandler.bind(this);
  }

  createNewCounter (value) {
    let counter = new Counter(value, this.overFlowHandler);
    counter.render();
    this.counterArray.push(counter);
  }f

  overFlowHandler (counter) {
    let currentCounterIndex = this.counterArray.indexOf(counter);
    this.counterArray[currentCounterIndex - 1].clickHandler();
  }
}
