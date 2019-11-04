


class Counter {
  constructor(value, overFlowCallback) {
    this.value = value;
    this.overFlowCallback = overFlowCallback;
    this.domElement = null;
    this.clickHandler = this.clickHandler.bind(this);
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
    if(++this.value > 9) {
      this.value = 0;
      this.overFlowCallback(this);
    }
    this.updateText();
  }
}
