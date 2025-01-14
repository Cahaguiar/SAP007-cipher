const cipher = {
  encode(offSet,senhaParaCifrar){
    let quantidadeDeletras= senhaParaCifrar.length;
    let resultadoCifra="";

    for(let i =0;i<quantidadeDeletras;i++) {
      let codigoASC = senhaParaCifrar.charCodeAt(i); 
      let codigoA= 65;
      let codigoZ= 90;
        if (codigoASC>=codigoA && codigoASC <=codigoZ){
      let cifrar= (codigoASC-codigoA +offSet) % 26 + codigoA;
      
      resultadoCifra= resultadoCifra + String.fromCharCode(cifrar)
        }
      
      

    
    }
    
    return resultadoCifra;


  },

  decode(offsetdecode, senhaParaDecifrar){
  

  let quantidadeDeletras2= senhaParaDecifrar.length;
  let resultadoDecifra= "";

  for(let i=0; i<quantidadeDeletras2;i++) {
      let codigoASC2= senhaParaDecifrar.charCodeAt(i);
      let codigoA= 65;
      let codigoZ= 90;
      if (codigoASC2>=65 && codigoASC2 <=codigoZ){
        let decifrar= (codigoASC2 + codigoA - offsetdecode) % 26 + codigoA;
        
        resultadoDecifra = resultadoDecifra + String.fromCharCode(decifrar)
      }
  }
  
  return resultadoDecifra;
  }

}



export default cipher;