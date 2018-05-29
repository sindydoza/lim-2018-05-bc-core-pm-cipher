

window.cipher = {
  encode:(offset, string) => {
    var txt = '';
    var asciir = '' ;
    var ascii=''
    for (let i=0; i <= string.length; i++){
       ascii=(string.charCodeAt(i));
       asciir= ascii+ offset
       txt = txt + String.fromCharCode(asciir);
    
    }
  
    return txt;
  
  },
  
  
  decode:(offset, string) => {

    var txtD = '';
    var ascii='';
    var ascii = '';

    for (let d=0; d <= string.length; d++){
         ascii=(string.charCodeAt(d));
         asciir= ascii - offset
         txtD = txtD + String.fromCharCode(asciir);
      
      }
    
    return txtD;
  }
  
 
};
