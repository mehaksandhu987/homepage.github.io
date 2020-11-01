document.querySelector('.colorGreetName').innerHTML = 'Play with buttons and sliders below to change the background colour of the webpage.';
loadName = window.onload = localStorage.getItem("Name");
function hiddentext() {
    document.querySelector('#hiddenText').style.color = "black";
    var name = document.querySelector('#nameBox').value;
    if (/^[^a-zA-Z]*$/.test(name))
        document.querySelector('#hiddenText').innerHTML = "Please type in your name correctly";
    else
        document.querySelector('#hiddenText').innerHTML = "Hii " +name+ ", please select a option from below!"
    if (/^[^a-zA-Z]*$/.test(name))
        document.querySelector('#hiddenText').style.color = "red";
    if (/^[^a-zA-Z]*$/.test(name))
        document.querySelector('.downLinks').style.display = "none";
    else
        document.querySelector('.downLinks').style.display = "block";
        localStorage.setItem("Name", name);
}

//color
var result;
var hexRed = '00';
var hexGreen = '00';
var hexBlue = '00';
function redfn() {
    var red = parseInt(document.querySelector('#redSlider').value);
    hexRed = red.toString(16).toUpperCase();
    if (hexRed.length === 1)
    {
        hexRed = '0' + hexRed;
    }
    result = '#' + hexRed + hexGreen + hexBlue;
    document.body.style.backgroundColor = result;
                 }

function greenfn() {
    var green = parseInt(document.querySelector('#greenSlider').value);
    hexGreen = green.toString(16).toUpperCase();
    if (hexGreen.length === 1)
    {
        hexGreen = '0' + hexGreen;
    }
    result = '#' + hexRed + hexGreen + hexBlue;
    document.body.style.backgroundColor = result;
                   }

function bluefn() {
    var blue = parseInt(document.querySelector('#blueSlider').value);
    hexBlue = blue.toString(16).toUpperCase();
    if (hexBlue.length === 1)
    {
        hexBlue = '0' + hexBlue;
    }
    result = '#' + hexRed + hexGreen + hexBlue;
    document.body.style.backgroundColor = result;
                  }


function bttnRed() {
    document.body.style.backgroundColor = 'red';
}
function bttnGreen() {
    document.body.style.backgroundColor = '#00ff00';
}
function bttnBlue() {
    document.body.style.backgroundColor = 'blue';
}
if (!/^[^a-zA-Z]*$/.test(loadName))
    document.querySelector('.colorGreetName').innerHTML = 'Hey ' + loadName + ', play with buttons and sliders below to change the background colour of the webpage.';