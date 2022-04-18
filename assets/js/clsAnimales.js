/**
 * Animales.js
 * @author Max Coronado Lorca
 */

// Definición de clases
export class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    let _nombre = nombre
    let _edad = edad
    let _img = img
    let _comentarios = comentarios
    let _sonido = sonido
    
    this.getNombre = () => _nombre
    this.setNombre = nombre => _nombre = nombre
    
    this.getEdad = () => _edad
    this.setEdad = edad => _edad = edad
    
    this.getImg = () => _img
    this.setImg = img => _img = img
    
    this.getComentarios = () => _comentarios
    this.setComentarios = comentarios => _comentarios = comentarios
    
    this.getSonido = () => _sonido
    this.setSonido = sonido => _sonido = sonido
  }
  
  get Nombre() {return this.getNombre}
  set Nombre(nombre) {this.setNombre(nombre)}
  
  get Edad() {return this.getEdad}
  set Edad(edad) {this.setEdad(edad)}
  
  get Img() {return this.getImg}
  set Img(img) {this.setImg(img)}
  
  get Comentarios() {return this.getComentarios}
  set Comentarios(comentarios) {this.setComentarios(comentarios)}
  
  get Sonido() {return this.getSonido}
  set Sonido(sonido) {this.setSonido(sonido)}
}

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  
  Rugir() {
    $('#player').attr('src', this.Sonido())
    $('#player').trigger('load')
    $('#player').trigger('play')
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  
  Aullar() {
    $('#player').attr('src', this.Sonido())
    $('#player').trigger('load')
    $('#player').trigger('play')
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  
  Grunnir() {
    $('#player').attr('src', this.Sonido())
    $('#player').trigger('load')
    $('#player').trigger('play')
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  
  Sisear() {
    $('#player').attr('src', this.Sonido())
    $('#player').trigger('load')
    $('#player').trigger('play')
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  
  Chillar() {
    $('#player').attr('src', this.Sonido())
    $('#player').trigger('load')
    $('#player').trigger('play')
  }
}
