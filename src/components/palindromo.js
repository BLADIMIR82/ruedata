
 export default function Palindromo (){

    const palidromo = (palabraspalin = "") => {
        palabraspalin = palabraspalin.toLowerCase();
        let alReves = palabraspalin.split("").reverse().join("").replace();
        if (palabraspalin === alReves) {
          console.info(
            `si es palindromo la palabras original ${palabraspalin} palabra alreves ${alReves}`
          );
        } else
          console.info(
            `no es  palindromo la palabras original ${palabraspalin} palabra alreves ${alReves}`
          );
      };
      console.log(palidromo("salas"));


return(
    <div>
<h1>Palindromo</h1>

    </div>

)

}
