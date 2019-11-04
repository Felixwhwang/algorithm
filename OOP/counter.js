


class Counter {
  constructor(value) {
    this.clickHandler = this.clickHandler.bind(this);
    this.value = value;
    this.domElement = null;
  }

  render() {
    // this.domElement = $('<div>').addClass('container').text(this.value).click(this.clickHandler);

    this.domElement  = $('<div>', {
      class: 'container',
      text: this.value,
      click: this.clickHandler
    });

    $('.counter-countroller-container').append(this.domElement);
  }

  increment() {
    this.value++;
  }

  updateText() {
    this.domElement.text(this.value);
  }

  clickHandler(e) {
    console.log('before increment', e.currentTarget);
    this.increment();
    this.updateText();
  }
}
