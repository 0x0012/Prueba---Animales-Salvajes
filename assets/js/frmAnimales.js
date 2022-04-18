/**
 * Funciones para el control del formulario
 * @author Max Coronado Lorca
 */

// Importa clases de animales
import {Leon, Lobo, Oso, Serpiente, Aguila} from './clsAnimales.js'
import {media} from './jsonFetch.js'

// Definición de variables globales
let animales = [] // Arreglo de animales ingresados

// Validad formulario
export const validarFormulario = () => {
    let nombre = $('#animal option:selected').val()
    let edad = $('#edad option:selected').val()
    let comentarios = $('#comentarios').val()
    
    if (nombre=='Seleccione un animal' || edad == 'Seleccione un rango de años' || comentarios == '') {
      alert('Por favor complete todos los campos del formulario')
      return false
    }
  
    return true
}

// Carga imagen previa del animal seleccionado
$('#animal').on('change', () => {
  let animal = $('#animal option:selected').val()
  let imagen = media(animal).imagen
  let estilo = 'width: 100%; height: 100%; object-fit: contain'
  $('#preview').css('background-image', 'none' )
  $('#preview').html(`<img src="${imagen}" style="${estilo}">`)
})

// Crear instancia del animal
export const crearAnimal = animal => {
  let nombre = $('#animal option:selected').val()
  let edad = $('#edad option:selected').val()
  let comentarios = $('#comentarios').val()
  let imagen = media(animal).imagen
  let sonido = media(animal).sonido
  
  switch (animal) {
    case 'Leon':
      animales.push(new Leon(nombre, edad, imagen, comentarios, sonido))
      break
    case 'Lobo':
      animales.push(new Lobo(nombre, edad, imagen, comentarios, sonido))
      break
    case 'Oso':
      animales.push(new Oso(nombre, edad, imagen, comentarios, sonido))
      break
    case 'Serpiente':
      animales.push(new Serpiente(nombre, edad, imagen, comentarios, sonido))
      break
    case 'Aguila':
      animales.push(new Aguila(nombre, edad, imagen, comentarios, sonido))
      break
  }  
}

// Muestra tarjeta del último animal creado
export const agregarAnimal = () => {
  // Último animal
  let ultimo = animales[animales.length - 1]
  
  const tarjeta = `<div id="animal_${animales.length - 1}" class="card border-warning text-white bg-dark m-1" style="width: 10rem">
                    <img class="card-img-top jq-img" src="${ultimo.Img()}" style="height: 10rem; object-fit: cover">
                    <div class="card-body jq-body">
                      <h6 class="card-title"><i class="fa-solid fa-volume-high fa-2x"></i></h6>
                    </div>
                   </div>`
  $('#Animales').append(tarjeta)
}

// Reproduce sonido al presionar el cuerpo de una tarjeta
$(document).on('click', '.jq-body', function () {
  let id = $(this).parent().attr('id') // Obtiene el id de la tarjeta
  let animal = id.substring(id.indexOf('_') + 1,id.length) // Del id obtiene el índice del animal
  
  switch (animales[animal].getNombre()) {
    case 'Leon':
      animales[animal].Rugir()
      break
    case 'Lobo':
      animales[animal].Aullar()
      break
    case 'Oso':
      animales[animal].Grunnir()
      break
    case 'Serpiente':
      animales[animal].Sisear()
      break
    case 'Aguila':
      animales[animal].Chillar()
      break
  }
})

// Muestra componente modal al presionar la imagen de una tarjeta
$(document).on('click', '.jq-img', function () {
  let id = $(this).parent().attr('id') // Obtiene el id de la tarjeta
  let animal = id.substring(id.indexOf('_') + 1,id.length) // Del id obtiene el índice del animal
  
  mostrarModal(animal)
})

// Limpia todos los campos del formulario
export const limpiarFormulario = () =>{
  $('#preview').css('background-image', 'url("../assets/imgs/lion.svg")')
  $('#preview').html('')
  $('#animal option:eq(0)').prop('selected', true)
  $('#edad option:eq(0)').prop('selected', true)
  $('#comentarios').val('')
}

// Muestra ventana modal con detalles del animal
const mostrarModal = id => {
  let animal = animales[id]
  
  let nombre = animal.Nombre()
  let edad = animal.Edad()
  let comentarios = animal.Comentarios()
  let imagen = animal.Img()
  
  const modal = `<div class="card border-warning text-white bg-dark m-1" style="width: 20rem">
                    <img class="card-img-top jq-img" src="${imagen}" style="height: 20rem; object-fit: cover">
                    <div class="card-body jq-body">
                      <h5 class="card-title">${nombre}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${edad}</h6>
                      <p class="card-text">${comentarios}</p>
                    </div>
                 </div>`
  
  $('.modal-body').html(modal)
  $('#exampleModal').modal('show')
}