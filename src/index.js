import cipher from './cipher.js';

console.log(cipher);

const offSet= document.getElementById("offset-encode");

const senhaParaCifrar= document.getElementById("password1");

const btnCifrar = document.getElementById("btnCifrar");

const senhaCifrada= document.getElementById("password_cipher");
    
function codificarButton() {//função para cifrar senha//
    const offSetvalue= offSet.valueAsNumber;//pegando o valor dentro do input, o AsNumber eu informo que é um número//
    const senhaParaCifrarvalue= senhaParaCifrar.value;// input.value (pega o valor dentro input)
    senhaCifrada.value = cipher.encode(offSetvalue, senhaParaCifrarvalue)
    
}
btnCifrar.addEventListener("click", codificarButton);
   //chamando evento//


const offsetdecode= document.getElementById("offset-decode");

const senhaParaDecifrar= document.getElementById("password2");

const btnDecifrar= document.getElementById("btndecifrar");

const senhaDecifrada= document.getElementById("password_deciphered")

function decodificarButton() {
    const offSetvalue2 = offsetdecode.valueAsNumber;
    const senhaParaDecifrarvalue2= senhaDecifrada.value;
    senhaDecifrada.value = cipher.decode (offSetvalue2, senhaParaDecifrarvalue2)

}


btnDecifrar.addEventListener("click", decodificarButton);




//const offSetvalue= offSet.valueAsNumber//pegando o valor dentro do input, o AsNumber eu informo que é um número//
    //const senhaParaCifrarvalue= password1.value// input.value (pega o valor dentro input)













