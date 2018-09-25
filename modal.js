// You will create a single web page for a fake company. Use HTML and CSS to fully style it using modern design trends and page layout. Use JavaScript to create a modal to appear after a given amount of time on the page. You will need to fully style the modal too so think about what this modal will be used for. Is it a pop-up ad? Is it a prompt to get the user to enter their email address to sign up for the company newsletter? Is it a prompt to get the user to share this page on Facebook? You decide but make it look as professional as possible.

// The modal appears after 3 seconds of being on the web page.
// JavaScript is fully functional and throws no errors
// It is clear how the user would exit the modal (e.g. x or close button)



// Initiating Variables
var backgroundImage = document.getElementById('background-image');

var subWrapper = document.getElementById('sub-wrapper');

var background = document.getElementsByTagName('body')[0];

// CSS
background.style.backgroundColor = '#1C2833';
background.style.fontFamily = 'futura';

// Styling SubWrapper
subWrapper.style.backgroundColor = '#566573';
subWrapper.style.width = '30vw';
subWrapper.style.position = 'absolute';
subWrapper.style.top = '20%';
subWrapper.style.left = '35%';
subWrapper.style.borderRadius = '10px';
subWrapper.style.padding = '1% 2% 0 2%';

// Creating & Adding Elements into SubWrapper
var exit = document.createElement('button');
subWrapper.appendChild(exit);

var subscribe = document.createElement('h1');
subWrapper.appendChild(subscribe);

var nameText = document.createElement('h4');
subWrapper.appendChild(nameText);

var nameInsert = document.createElement('input');
subWrapper.appendChild(nameInsert);

var emailText = document.createElement('h4');
subWrapper.appendChild(emailText);

var emailInsert = document.createElement('input');
subWrapper.appendChild(emailInsert);

var submit = document.createElement('button');
subWrapper.appendChild(submit);

// Styling Subscribe
subscribe.textContent = 'Subscribe';
// subscribe.style.border = '2px solid purple';
subscribe.style.textAlign = 'center';
subscribe.style.marginBottom = '10%';
subscribe.style.fontSize = '3em';

// Styling Name Text
nameText.textContent = 'first/last name';
// nameText.style.border = '2px solid green';
nameText.style.textAlign = 'center';

// Styling Name Insert
nameInsert.style.backgroundColor = '#566573';
nameInsert.style.border = 'none';
nameInsert.style.borderBottom = '2px solid #1C2833';
nameInsert.style.margin = 'auto';
nameInsert.style.width = '50%';
nameInsert.style.textAlign = 'center';
nameInsert.style.fontSize = '1em';
nameInsert.style.margin = 'auto';
nameInsert.style.display = 'block';

// Styling Email Text
emailText.textContent = 'email';
// emailText.style.border = '2px solid green';
emailText.style.textAlign = 'center';

// Styling Email Insert
emailInsert.style.backgroundColor = '#566573';  emailInsert.style.border = 'none';
emailInsert.style.borderBottom = '2px solid #1C2833';
emailInsert.style.margin = 'auto';
emailInsert.style.width = '50%';
emailInsert.style.textAlign = 'center';
emailInsert.style.fontSize = '1em';
emailInsert.style.margin = 'auto';
emailInsert.style.display = 'block';

// Styling Submit
submit.textContent = 'Submit';
submit.style.display = 'block';
submit.style.margin = '20% auto';
submit.style.marginTop = '10%';
submit.style.fontSize = '1em';
submit.style.borderRadius = '10px';
submit.style.backgroundColor = '#D5D8DC';

// Styling Exit
exit.style.height = '20px';
exit.style.width = '20px';
exit.style.backgroundColor = '#641E16';
exit.style.float = 'right';
exit.style.fontSize = '12px';
exit.textContent = 'x';
exit.style.textAlign = 'center';
exit.style.borderRadius = '100%';
exit.style.border = 'none';
exit.style.color = '#C0392B';
exit.style.paddingBottom = '10px';
