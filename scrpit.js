var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var colorcodetext = document.getElementById('colorcode');
var complementarycodetext = document.getElementById('complementarycode');
var anklickbarerTextElement = document.getElementById('colorcode');
var anklickbarerTextElement2 = document.getElementById('complementarycode');

var Changed = false;

var hexCode = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

document.body.style.backgroundColor = hexCode;
document.getElementById('colorcode').innerHTML = hexCode;

function berechneKomplementärfarbe(hexCode) {
    // Überprüfe, ob der Hex-Code gültig ist
    if (!/^#[0-9A-Fa-f]{6}$/i.test(hexCode)) {
        console.error("Ungültiger Hex-Code");
        return null;
    }

    // Extrahiere die RGB-Werte
    var r = parseInt(hexCode.slice(1, 3), 16);
    var g = parseInt(hexCode.slice(3, 5), 16);
    var b = parseInt(hexCode.slice(5, 7), 16);

    // Berechne die Komplementärfarbe
    var komplementärR = 255 - r;
    var komplementärG = 255 - g;
    var komplementärB = 255 - b;

    // Konvertiere die RGB-Werte zurück in einen Hex-Code
    var komplementärHex = "#" +
        komplementärR.toString(16).padStart(2, '0') +
        komplementärG.toString(16).padStart(2, '0') +
        komplementärB.toString(16).padStart(2, '0');
    
    return komplementärHex;
}

var komplementärHex = berechneKomplementärfarbe(hexCode);

colorcodetext.style.color = komplementärHex;
complementarycodetext.innerHTML = komplementärHex;
complementarycodetext.style.color = komplementärHex;

anklickbarerTextElement.addEventListener("click", function() {
    navigator.clipboard.writeText(hexCode)
      .then(function() {
        alert("Color copied!");
      })
      .catch(function(error) {
        console.error('Failed to copy text: ', error);
    });
});

anklickbarerTextElement2.addEventListener("click", function() {
    navigator.clipboard.writeText(hexCode)
      .then(function() {
        alert("Complementary copied!");
      })
      .catch(function(error) {
        console.error('Failed to copy text: ', error);
    });
});
