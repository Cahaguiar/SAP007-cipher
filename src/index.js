import cipher from './cipher.js';

const offSet= document.getElementById("offset-encode");

const senhaParaCifrar= document.getElementById("password1");

const btnCifrar = document.getElementById("btnCifrar");

const senhaCifrada= document.getElementById("password_cipher");
    
function codificarButton() {
    const offSetvalue= offSet.valueAsNumber;
    const senhaParaCifrarvalue= senhaParaCifrar.value;
    senhaCifrada.value = cipher.encode(offSetvalue, senhaParaCifrarvalue)
    
}
btnCifrar.addEventListener("click", codificarButton);
   


const offsetdecode= document.getElementById("offset-decode");

const senhaParaDecifrar= document.getElementById("password2");

const btnDecifrar= document.getElementById("btndecifrar");

const senhaDecifrada= document.getElementById("password_deciphered")

function decodificarButton() {
    const offSetvalue2 = offsetdecode.valueAsNumber;
    const senhaParaDecifrarvalue2= senhaParaDecifrar.value;
    
    senhaDecifrada.value = cipher.decode(offSetvalue2, senhaParaDecifrarvalue2)

}


btnDecifrar.addEventListener("click", decodificarButton);
















