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
subWrapper.style.height = '60vh';
subWrapper.style.width = '30vw';
subWrapper.style.position = 'absolute';
subWrapper.style.top = '20%';
subWrapper.style.left = '35%';
subWrapper.style.borderRadius = '10px';
subWrapper.style.padding = '2%';

// Creating & Adding Elements into SubWrapper
var subscribe = document.createElement('h1');
subWrapper.appendChild(subscribe);

var nameText = document.createElement('h4');
subWrapper.appendChild(nameText);

var nameInsert = document.createElement('input');
subWrapper.appendChild(nameInsert);

var emailText = document.createElement('h4');
subWrapper.appendChild(emailText);

// Styling Subscribe
subscribe.textContent = 'Subscribe';
subscribe.style.border = '2px solid purple'
subscribe.style.textAlign = 'center';

// Styling Name Text
nameText.textContent = 'first/last name';
nameText.style.border = '2px solid green';
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
emailText.style.border = '2px solid green';
emailText.style.textAlign = 'center';
