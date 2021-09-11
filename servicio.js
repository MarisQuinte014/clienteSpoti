let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";
let token="Bearer BQDlZPSEBZdCLzyOPqmLv6NBoozoytzW_3wmhAeJgIptRlVjPnvu0zeor1QHadxzJ0wJWF55fw0XQld1kpUEVXJgiSbOmXHjyl_873_wqICvFP7u-Vc5gz3gpKe1y8SbJpDXtHqf64XWxqZQU300MiCC7wZSFqg";

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
    let fila=document.getElementById("fila");
    datos.forEach(function(cancion){
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        let titulo = document.createElement("h5");
        titulo.textContent=cancion.name;

        //PADRES E HIJOS 

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    })
    
}

/*
Api = Mesero, permite cambio de cliiente con servidor (cambio de datos cliente-servidor)
Peticion = Cliente al servidor 2 elementos (cabecera y cuerpo) cabecera= uri (a donde voy (einpot= servicio especifico a donde estoy accediendo) 4 tipos de metodos
get, post, put, delete) cuando el cliente llegue tengo que tener datos Json(objeto) donde guardo mucha informacion (atributo y valor)
Respuenta = 

*/