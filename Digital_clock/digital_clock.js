// Initializing Variables for HTML

var body = document.getElementsByTagName('body')[0];

var clock = document.getElementById('clock');

setInterval(function(){

  // Creating Time Variables

  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  // CLOCK VARIABLE

  var time = prependZero(twelveHour()) + ':' + prependZero(minutes) + ':' + prependZero(seconds) + amPm();

  // HEXADECIMAL VARIABLE

  var hex = '#' + hours + '1B' + seconds;

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
    } else {
      return hours;
    }
  };

  // UPDATING STYLES

  body.style.backgroundColor = hex + '80';
  clock.style.color = hex;
  body.style.transition = '1s';
  clock.style.transition = '1s';

  // DISPLAY CLOCK

  clock.innerHTML = time;


}, 500);

// STYLE

clock.style.fontSize = '10em';
clock.style.fontFamily = 'Futura';
body.style.textAlign = 'center';
body.style.paddingTop = '15%'
clock.style.borderTop = '5px solid';
clock.style.borderBottom = '5px solid';
clock.style.display = 'inline-block';
clock.style.borderRadius = '2px';
clock.style.padding = '2%';
