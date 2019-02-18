var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
      myImage.setAttribute ('src','images/image2.jpg');
      myImage.setAttribute ('height', '540px');
	  myImage.setAttribute ('width', '515px');
    } 
    else {
      myImage.setAttribute ('src','images/image.jpg');
      myImage.setAttribute ('height', '540px');
	  myImage.setAttribute ('width', '405px');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName + '! This is my cat Olivia';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName + '! This is my cat Olivia';
}

myButton.onclick = function() {
  setUserName();
}