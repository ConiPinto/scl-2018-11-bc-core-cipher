window.cipher = {

  encode: (textoCifrar, desplazamiento) => {
      let text = "";
      for (let i = 0; i < textoCifrar.length; i++) {

          let secondText = textoCifrar.charCodeAt(i);

          if (secondText >= 65 && secondText <= 90) {
              let code = (secondText - 65 + desplazamiento) % 26 + 65;
              text += String.fromCharCode(code);
          } else {
              text += String.fromCharCode(secondText);
          }
      }
      return text;

  },



  decode: (textoCifrar, desplazamiento) => {
      let text = "";
      for (let i = 0; i < textoCifrar.length; i++) {

          let secondText = textoCifrar.charCodeAt(i);

          if (secondText >= 65 && secondText <= 90) {
              let code = (secondText + 65 - desplazamiento) % 26 + 65;

              text += String.fromCharCode(code);
          } else {
              text += String.fromCharCode(secondText);
          }
      }
      return text;
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
