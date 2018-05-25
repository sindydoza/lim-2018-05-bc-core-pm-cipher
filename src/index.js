//var texto= prompt("ingrese un texo");
//var clave=parseInt(prompt("ingrese una llave"));

var botonCifrar = document.getElementById('cifrar');
var botonDesCifrar = document.getElementById('descifrar');
botonCifrar.addEventListener('click', Cifrar);
botonDesCifrar.addEventListener('click',Descifrado);




function Cifrar() { 
  var texto = document.getElementById('mensaje').value;
  var clave = parseInt(document.getElementById('llave').value);
  var cifrado= document.getElementById('msncifrado');
 

  var txt = '';
  for (i=0; i <= texto.length; i++){
     ascii=(texto.charCodeAt(i));
     asciir= ascii+ clave
     txt = txt + String.fromCharCode(asciir);
  
  }
  console.log(txt);
  cifrado.value = txt;

}


function Descifrado () {
  var textoC= document.getElementById('msncifrado').value;
  var claveD = parseInt(document.getElementById('llave').value);
  var Descifrado = document.getElementById('msnDescifrado');
  var txtD = '';

for (d=0; d <= textoC.length; d++){
     ascii=(textoC.charCodeAt(d));
     asciir= ascii - claveD
     txtD = txtD + String.fromCharCode(asciir);
  
  }

Descifrado.value=txtD
}
