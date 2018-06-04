

window.cipher = {
  encode:(offset, string) => {
    var txt = '';
    var asciir = '';
    var ascii='';
    for (let i=0; i <= string.length; i++){
       ascii=(string.charCodeAt(i));
       if (ascii >= 65 &&  ascii <= 90 ){
        asciir = (ascii - 65 + offset) % 26 +65;
        txt = txt + String.fromCharCode(asciir);

       }
       else if (ascii >= 97 &&  ascii <= 122 ){
        asciir = (ascii - 97 + offset) % 26 +97;
        txt = txt + String.fromCharCode(asciir);
       
       }
       else {
        asciir = ascii;
        if(!isNaN(asciir)){
          txt = txt + String.fromCharCode(asciir);
          
          }
        
       }
    }
    
  
    return txt;

  },
  
  
  decode:(offset, string) => {

    var txtD = '';
    var ascii='';
    var asciir = '';

    for (let d=0; d <= string.length; d++){
         ascii=(string.charCodeAt(d));
         if (ascii >= 65 &&  ascii <= 90){
          asciir = (ascii - 90 - offset) % 26 + 90
          txtD = txtD + String.fromCharCode(asciir);
         } else if (ascii >= 97 &&  ascii <= 122 ) {
          asciir = (ascii - 122 -  offset) % 26 + 122
          txtD = txtD + String.fromCharCode(asciir);
         }
         else {
          asciir = ascii;
          if(!isNaN(asciir)){
            txtD = txtD + String.fromCharCode(asciir);
            
            }
          
         }
      }
    
    return txtD;
  }
  
 
};
