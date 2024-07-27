function chocolates (k=null, x= null){
  if(!k) return console.info("Usted debe ingresar un número entero");
  if(!Number.isInteger(k)) return console.info("Usted debe ingresar un número entero");
  if(k<0) return console.info("Usted debe ingresar un número entero positivo");
  if(!x) return console.info("Usted debe ingresar un array con la cantidad de bombones de cada tipo");
  

  
    let cajas = 0;
    let contador = 0;
    
    x.map((e)=>{
      if(e > 0){
      contador += 1
      e--
      if (contador == k){
        cajas +=1
        contador = 0
      }
    }
  }
)
return cajas
  }
console.log(chocolates(3,[4,7,5,8]))
