//var texto= prompt("ingrese un texo");
//var clave=parseInt(prompt("ingrese una llave"));

var botonCifrar = document.getElementById('cifrar');

botonCifrar.addEventListener('click', Cifrar);

function Cifrar() { 
  var texto = document.getElementById('mensaje').value;
  var clave = parseInt(document.getElementById('llave').value);
  var cifrado= document.getElementById('msncifrado');

  var txt = "";
  for (i=0; i <= texto.length; i++){
     ascii=(texto.charCodeAt(i));
     asciir= ascii+ clave
     txt = txt + String.fromCharCode(asciir);
     console.log(String.fromCharCode(asciir));
  }
  console.log(txt);
  cifrado.value = txt;



}