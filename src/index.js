window.onload = () => {


    
    
    
    document.getElementById("siguiente").addEventListener("click", () => {
        document.getElementById("primerapagina").style.display="none";
        document.getElementById("segundapagina").style.display="block";

    }),




    document.getElementById("botoncodificar").addEventListener("click", () => {
            let encryptText = (document.getElementById("textoCifrar").value).toUpperCase();
            let offset = document.getElementById("desplazamiento").value;
            offset = parseInt(offset);

            document.getElementById("resultado").innerHTML = (cipher.encode(encryptText, offset));

        }),



        document.getElementById("botondescifrar").addEventListener("click", () => {
            let encryptText = document.getElementById("textoCifrar").value;
            let offset = document.getElementById("desplazamiento").value;
            offset = parseInt(offset);

            document.getElementById("resultado").innerHTML = cipher.decode(encryptText, offset);

        })
}



