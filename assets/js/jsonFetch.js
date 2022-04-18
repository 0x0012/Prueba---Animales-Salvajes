/**
 * Funciones para carga y manajo de información desde archivo JSON
 * @author Max Coronado Lorca
 */

// Definición de variables globales
const ANIMALES_JSON = 'animales.json'
let archivos = [] // Ubicación de archivos de imagen y sonido de animales

// Carga archivo JSON y devuelve lista de archivos de imagen y sonido
const cargaArchivos = async () => {
  let result = await fetch(ANIMALES_JSON)
  let json = await result.json()
  return json.animales
}

// Devuelve la ubicación del archivo de imagen y sonido para el animal indicado
export const media = animal => {
  let archivo = (archivos.filter(a => a.name == animal))[0]
  return {
    imagen: `assets/imgs/${archivo.imagen}`,
    sonido: `assets/sounds/${archivo.sonido}`    
  }
}

// Función IIFE que almacena consulta JSON en arreglo
(() => {
  cargaArchivos().then(datos => {
    archivos = datos
  })
})()