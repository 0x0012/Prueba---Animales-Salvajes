/**
 * Solución Prueba - Animales Salvajes
 * @author Max Coronado Lorca
 */

// Importa funciones necesarias
import {validarFormulario, crearAnimal, agregarAnimal, limpiarFormulario} from './frmAnimales.js'

// Registra el animal al presionar botón "Agregar"
$('#btnRegistrar').click(() => {
  if (validarFormulario()) {
    crearAnimal($('#animal option:selected').val())
    agregarAnimal()
    limpiarFormulario()
  }
})
