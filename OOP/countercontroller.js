


class CounterController {
  constructor () {

  }

  createNewCounter (value) {
    var counter = new Counter(value);
    counter.render();
  }
}
