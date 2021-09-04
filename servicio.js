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
    console.log(respuesta.tracks);
})
.catch(function(error){
    console.log(error);
})