
   const promise = (res) => new Promise((resolve, reject)=>{
      
        if(res)
        { 
          resolve({status:'200', msg: 'ok', id:3})
        }
        else
        {
          reject("NO SE RESOLVIO LA PROMESA")
        }

   })

   promise(true)
   .then((res)=>console.log(res))
   .catch((error)=>console.log(error))
   .finally(()=>console.log("LO LOGRAMOS"))


   promise(false)
   .then((res)=>console.log(res))
   .catch((error)=>console.log(error))
   .finally(()=>console.log("NO LO LOGRAMOS"))