window.cipher = {

  encode: (textoCifrar, desplazamiento) => {
      let texto = "";
      for (let i = 0; i < textoCifrar.length; i++) {

          let textoSegundo = textoCifrar.charCodeAt(i);

          if (textoSegundo >= 65 && textoSegundo <= 90) {
              let code = (textoSegundo - 65 + desplazamiento) % 26 + 65;
              texto += String.fromCharCode(code);
          } else {
              texto += String.fromCharCode(textoSegundo);
          }
      }
      return texto;

  },



  decode: (textoCifrar, desplazamiento) => {
      let texto = "";
      for (let i = 0; i < textoCifrar.length; i++) {

          let textoSegundo = textoCifrar.charCodeAt(i);

          if (textoSegundo >= 65 && textoSegundo <= 90) {
              let code = (textoSegundo + 65 - desplazamiento) % 26 + 65;

              texto += String.fromCharCode(code);
          } else {
              texto += String.fromCharCode(textoSegundo);
          }
      }
      return texto;
  }
};
  
  
  
  
  
  
  



















/*window.cipher = { 
  encode: (textoCifrar, desplazamiento) => {
    let textToEncrypt="";
    for (let i=0; i< textoCifrar.length;i++){
      let textoDos=textoCifrar.charCodeAt(i);
        if (textoDos >=65 && textoDos<=90){
        let newCode=(textoDos-65+desplazamiento)%26+65;
        textToEncrypt+=String.fromCharCode(newCode);
      }
          }
    return textToEncrypt;
 
 
  },
  decode: (textoCifrar, desplazamiento) => {
    let textToEncrypt="";
    for (let i=0; i< textoCifrar.length;i++){
      let textoDos=textoCifrar.charCodeAt(i);
        if (textoDos >=65 && textoDos<=90){
        let newCode=(textoDos-65-desplazamiento)%26+65;
        if (newCode<65){
          newCode+=26;
        }
        textToEncrypt+=String.fromCharCode(newCode);
      }
          }
    return textToEncrypt;
  }
 
 };*/
