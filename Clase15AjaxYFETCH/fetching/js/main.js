

 programarAcciones()

 function programarAcciones()
 {
   programarBotonVer()
   programarBotonAdmin()
   programarBotonLocal()
 }

 function programarBotonVer()
 {
     const btn = document.getElementById("ver");
     btn.addEventListener("click", ()=>{
         cargarListadoDePosts();
     })
 }

 function cargarListadoDePosts()
 {

   fetch('https://jsonplaceholder.typicode.com/posts/')
   .then((res)=>res.json())
   .then((json)=>mostrarListadoDePosts(json))
   .catch((error)=>alert("No puedo mostrar info. Intente mas tarde "+error))

 }

 function mostrarListadoDePosts(posts)
 {
    const container = document.getElementById("appContainer")
    container.innerHTML=""
    posts.forEach((blogpost)=>{

         mostrarPost(blogpost, container)

    })
 }

 function mostrarPost(post, div)
 {
      const divPost = document.createElement("div");
      divPost.innerHTML=`<h2>${post.title}</h2>
                         <p>${post.body.substr(0,20)}...</p>
                         `
      const btn = document.createElement("button")
      btn.innerHTML="VER MÁS"
      btn.addEventListener("click", ()=>{
         loadMoreInfo(post.id)
      })
      divPost.appendChild(btn)
      divPost.setAttribute("style", "width:25%;padding:2%;border-radius:20px;border:1px solid blue; margin:2%")
      div.appendChild(divPost);             
 }

   

 function programarBotonAdmin()
 {
   const btn = document.getElementById("admin");
   btn.addEventListener("click", ()=>{
       cargarNuevoPost();
   })
 }

 function cargarNuevoPost()
 {
    const title = prompt("ingresa el titulo")
    const contenido = prompt("ingresa el contenido")
    crearNuevoPost(title, contenido)
 }

 function crearNuevoPost(title, contenido)
 {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: contenido,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => alert("Post creado correctamente"))
      .catch((error)=>alert("No pude crearlo "+ error))
    


 }

 async function loadMoreInfo(idPost)
 {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    let json = await response.json()
    mostrarPostById(json);
   
    
 }

 function mostrarPostById(post)
 {
   const container = document.getElementById("appContainer")
   container.innerHTML=""
   container.innerHTML=`<h1 style="display:block">${post.title}</h1>
                        <p>${post.body}</p>`

 }

 function programarBotonLocal()
 {
   const btn = document.getElementById("locales");
   btn.addEventListener("click", ()=>{
       cargarProductosLocal();
   })
     

 }

 function cargarProductosLocal()
 {
   fetch("/js/data/products.data.json")
   .then((res)=>res.json())
   .then((json)=>console.log(json))
 }