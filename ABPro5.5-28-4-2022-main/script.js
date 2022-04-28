let verPost = document.getElementById('postBlog');
let cargando = document.getElementById('loading');
let url = 'https://newsapi.org/v2/everything?' +
          'q=Technology&' +
          'from=2022-04-01&' +
          'language=es&'+
          'sortBy=popularity&' +
          'apiKey=76d16bae822e47929ec0a4353c4f206f';

let req = new Request(url);
let arregloArticulos = [];
let favorito = [];

async function traer() {
try {     
const  response =  await fetch(req)
const data = await response.json()
arregloArticulos = data.articles
}
catch (err){ 
  console.log(err)}
};

const accionAsincrona = async () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
  });
}

async function recorrerPost(){
  cargando.innerHTML+= `<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
  </div>`
  await accionAsincrona();
  cargando.innerHTML = ``
  verPost.innerHTML = ``
  arregloArticulos.map(e => {
    
  verPost.innerHTML+= `
  <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">${e.author}</strong>
          <h3 class="mb-0">${e.title}</h3>
          <div class="mb-1 text-muted">${e.publishedAt}</div>
          <p class="card-text mb-auto">${e.description}</p>
          <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
          <button class="btn btn-outline-warning" onclick = "agregarFavorito('${e.title}'),toggle(this)">Agregar a Favoritos</button>
          </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src=${e.urlToImage}>
      </div>
    </div>
</div>`
})
}

function findNews() {
  verPost.innerHTML=``
  const buscarPost = document.getElementById("buscarF").value
if(buscarPost == "")
  {
    alert("Su Busqueda está vacia")
  }
else if (!isNaN(buscarPost)) 
{
  alert("no puede ingresar numeros");
}

else{const nombrePost = buscarPost.toLowerCase()
  let filtroPost=[];
filtroPost=arregloArticulos.filter(arregloArticulos=> arregloArticulos.title.includes(nombrePost));
if(filtroPost==""){
  alert("No se encuentra ningun Post")}
filtroPost.map((e) => {
  let title=(e.title)
    verPost.innerHTML += ` <div class="col-md-6">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-success">${e.author}</strong>
        <h3 class="mb-0">${e.title}</h3>
        <div class="mb-1 text-muted">${e.publishedAt}</div>
        <p class="card-text mb-auto">${e.description}</p>
        <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
        <button class="btn btn-outline-warning" onclick = "agregarFavorito('${title}'),toggle(this)" type="button">Agregar a Favoritos</button>
        </div>
      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src=${e.urlToImage}>
    </div>
  </div>
</div`
  })}
}

function toggle(e) {
  let txt = e.innerText;
  e.innerText = txt == 'Artículo ya agregado' ? 'Agregar a Favoritos' : 'Artículo ya agregado';
}

let favoritoContenido=document.getElementById("favoritoContenido")

function agregarFavorito(title) {

let agregar = arregloArticulos.find(elemento => elemento.title === title);
  favorito.push(agregar)
  favoritoContenido.innerHTML=``
  favorito.forEach(e => {
      favoritoContenido.innerHTML += `<div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">${e.title}</h3>
          <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
          <a onclick="borrarFavoritos()" class="btn btn-outline-warning">Borrar Favoritos</a>
          </div>
    </div>
  </div>`
  })
}

// Funcion para Borrar Favoritos

function borrarFavoritos() {
  favoritoContenido.innerHTML=``
  favorito = []
}

