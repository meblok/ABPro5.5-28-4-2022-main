//declara el elemento a manipular en el DOM
let verLorem=document.getElementById('verlorem');
//declara el arreglo para almacenar los datos de la consulta
let arregloLorem=[];
// declara request


function traer() {
    fetch("tabla.json")
    .then(response=>response.json())
    .then((datos)=>{
    arregloLorem=datos
    console.log(arregloLorem)
    recorrerPost(datos)
    }) }
  
  
  
  function recorrerPost(datos){
    verLorem.innerHTML = ''
    arregloLorem.map(e => {
      
    verLorem.innerHTML+= `
    <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">${e.userId}</strong>
            <h3 class="mb-0">${e.title}</h3>
            <div class="mb-1 text-muted">${e.id}</div>
            <p class="card-text mb-auto">${e.body}</p>
            <a class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal${e.id}">Continuar Leyendo</a>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal${e.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${e.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <p>${e.body}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>`
  })
  }