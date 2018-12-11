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
  
  
  
