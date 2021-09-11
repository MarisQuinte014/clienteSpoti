let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";
let token="Bearer BQDiFXCXFK7uMreuVq-NUqDpb00w6QMLqdOKLbe66dED7q34eK5LkL_-6dg6LQf1wiilJVeZwioQzjReAWxkUcAj-6fG7WzlO8iTS-Bi-22Ydn3gqXj63JdpoDE4PPCsTYH9a-Zz2WqbOCiiYf830fHPwcU1_FM";

let parametrosPeticion={
 method:"GET",
 headers:{
    Authorization:token
 }
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
    pintarDatos(respuesta.tracks);
    // console.log(respuesta.tracks);
    // console.log(respuesta.tracks[0]);
    // console.log(respuesta.tracks[0].name);
    // console.log(respuesta.tracks[0].preview_url);
    // console.log(respuesta.tracks[0].album.images[0].url);
})
.catch(function(error){
    console.log(error);
})

function pintarDatos(datos){
    //Punto de apoyo
    let fila=document.getElementById("fila");
    datos.forEach(function(cancion){
        //crear un div con js
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        //crear clases para diseño
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        //crear audio
        let audio = document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let titulo = document.createElement("h5");
        titulo.textContent=cancion.name;

        //PADRES E HIJOS 
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
        
    })
    
}

/*
Api = Mesero, permite cambio de cliente con servidor (cambio de datos cliente-servidor)
Peticion = Cliente al servidor 2 elementos (cabecera y cuerpo) cabecera= uri (a donde voy (einpot= servicio especifico a donde estoy accediendo) 4 tipos de metodos
get, post, put, delete) cuando el cliente llegue tengo que tener datos Json(objeto) donde guardo mucha informacion (atributo y valor)
feach = promesa (datos al servidor) el elemento .then(verificar que este en formato json) (catch = donde hay error )
Respuenta = para dodne voy (uri) con parametros 

pogressVar  

*/