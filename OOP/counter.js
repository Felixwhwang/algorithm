


class Counter {
  constructor (value) {
    this.value = value;
  }

  render () {
    var newDiv = $('<div>')
      .addClass('container')
      .text(this.value);

    $('body').append(newDiv);
  }
}
