
/*function buscarGif(){
    let clave = "Kcs98UQoTAvtyKCw6QLRLfS12RECm5MH"
    let palabra = " "
    let requestUrl = "https://api.giphy.com/v1/gifs/random?api_key="
    
    // https://api.giphy.com/v1/gifs/random?api_key=Kcs98UQoTAvtyKCw6QLRLfS12RECm5MH &tag =&rating=g

    requestUrl = requestUrl.concat(clave, '&tag=','&rating=g')
    fetch(requestUrl)
    .then((response) =>response.json())
    .then(
        (data) =>{
            console.log(requestUrl);
            src = data.data.images.downsized.url
            document.getElementById("resultGif").src = src
        })
        .catch((error) => console.log(error))
}*/
var src;

function buscarGif(){
    let clave = "Kcs98UQoTAvtyKCw6QLRLfS12RECm5MH"
    let palabra = document.getElementById("palabraBusqueda").value
    let requestUrl = "https://api.giphy.com/v1/gifs/search?api_key="

    requestUrl = requestUrl.concat(clave, '&q=', palabra, '&limit=25')
    fetch(requestUrl)
    .then((response) =>response.json())
    .then(
        (data) =>{
            console.log(requestUrl);
            let num = Math.floor(Math.random() * 15)
            src = data.data[num].images.original.url
            document.getElementById("resultGif").src = src
        })
        .catch((error) => console.log(error))
}