// Initializing Variables for HTML
var body = document.getElementsByTagName('body')[0];

var clock = document.getElementById('clock');

setInterval(function(){
  // Creating Time Variables
  var hours = new Date().getHours()
  var minutes = new Date().getMinutes()
  var seconds = new Date().getSeconds()

  // Clock Variable
  var time = prependZero(twelveHour()) + ':' + prependZero(minutes) + ':' + prependZero(seconds) + amPm();

  var hex = '#' + hours + minutes + seconds;

  // Display Clock
    clock.innerHTML = time;

  // FUNCTIONS
  function prependZero(time) {
    while (time <= 9) {
      return '0' + time;
    }
    return time;
  };

  function amPm() {
    if (hours < 12){
      return ' AM'
    } else {
      return ' PM'
    }
  };

  function twelveHour() {
    if (hours > 12) {
      return hours - 12;
    }
  };

  // UPDATING STYLES
  body.style.backgroundColor = hex + '88';
  clock.style.color = hex;
  body.style.transition = '1s';
  clock.style.transition = '1s';

}, 1000)

// STYLE
clock.style.fontSize = '9em';
clock.style.fontFamily = 'futura';
body.style.textAlign = 'center';
body.style.paddingTop = '15%'
clock.style.borderTop = '5px solid';
clock.style.borderBottom = '5px solid';
clock.style.display = 'inline-block';
clock.style.borderRadius = '2px';
clock.style.padding = '2%';
