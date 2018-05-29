//var texto= prompt("ingrese un texo");
//var clave=parseInt(prompt("ingrese una llave"));

 document.getElementById('cifrar').addEventListener('click',()=>{
    var texto = document.getElementById('mensaje').value;
    var clave = parseInt(document.getElementById('llave').value);
    var cifrado= document.getElementById('msncifrado');
    cifrado.value = cipher.encode(clave, texto);
  
 });














 document.getElementById('descifrar').addEventListener('click',() =>{
  var textoC= document.getElementById('msncifrado').value;
  var claveD = parseInt(document.getElementById('llave').value);
  var Descifrado = document.getElementById('msnDescifrado');
  Descifrado.value = cipher.decode(claveD, textoC);

 }
);

 

/*function Cifrar() { 
 
 

  var txt = '';
  for (i=0; i <= texto.length; i++){
     ascii=(texto.charCodeAt(i));
     asciir= ascii+ clave
     txt = txt + String.fromCharCode(asciir);
  
  }

  cifrado.value = txt;

}
*/

