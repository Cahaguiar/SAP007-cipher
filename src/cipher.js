const cipher = {// ...função cifrar
  encode(offSet,senhaParaCifrar){
  

    let quantidadeDeletras= senhaParaCifrar.length;
    let resultadoCifra="";

    for(let i =0;i<quantidadeDeletras;i++) {
      let codigoASC = senhaParaCifrar.charCodeAt(i); //passando a senha para linguagem unicode
      let codigoA= 65;
      let codigoZ= 90;
      if (codigoASC>=65 && codigoASC <=codigoZ){
      let cifrar= (codigoASC-codigoA +offSet) % 26 + codigoA;
      
      resultadoCifra= resultadoCifra + String.fromCharCode(cifrar)
      }
      
      //resultadoCifra= resultadoCifra + String.fromCharCode(cifrar)

    
    }
    console.log (resultadoCifra)
    return resultadoCifra;


  },

  decode(offsetdecode, senhaParaDecifrar){
  console.log(offsetdecode, senhaParaDecifrar)

  let quantidadeDeletras2= senhaParaDecifrar.length;
  let resultadoDecifra= "";

  for(let i=0; i<quantidadeDeletras2;i++) {
      let codigoASC2= senhaParaDecifrar.charCodeAt(i);
      let codigoA= 65;
      let codigoZ= 90;
      if (codigoASC2>=65 && codigoASC2 <=codigoZ){
        let decifrar= (codigoASC2 - codigoA + offsetdecode) % 26 + codigoA;
        console.log(decifrar)
        resultadoDecifra = resultadoDecifra + String.fromCharCode(decifrar)
      }
  }
  console.log (resultadoDecifra)
  return resultadoDecifra;
  }

}



export default cipher;