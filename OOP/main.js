$(document).ready(initialApp);


function initialApp () {
  var counterCountroller1 = new CounterController();
  counterCountroller1.createNewCounter(21);
  counterCountroller1.createNewCounter(32);
  counterCountroller1.createNewCounter(23);
  counterCountroller1.createNewCounter(12);
  counterCountroller1.createNewCounter(41);
  counterCountroller1.createNewCounter(512);

};
