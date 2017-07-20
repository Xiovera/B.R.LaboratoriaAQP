//7 ejercicios con TDD
var assert = require("assert");

function EjerciciosFunciones(){
  this.ejercicio1 = function (num) {
  	num = num.toString();
  	var resultado = "";
  	
  	for (var i = num.length - 1; i >=0; i--) {
  		resultado += num[i];
  	}
    
    return (resultado == num)? "Es capicua" : "No es capicua";  
  }

  this.ejercicio2 = function (n, m){
    var resultado;
    if(!isNaN(n) && !isNaN(m)){
      resultado = Math.pow(n,m);
    } else{
      n = parseInt(n);
      m = parseInt(m);
      resultado = Math.pow(n,m); 
    }        
    
    return resultado;
  }

  this.ejercicio3 = function (arr, letra) {
    var numLetras = 0;
    var longActual = arr.length;
    var nuevos = arr.split(letra);
    var longNueva = nuevos.length;

    numLetras = longActual - longNueva;
    return numLetras;
  }

  this.ejercicio4 = function (frase) {
    var cantidad = frase.split(" ");
    cantidad = cantidad.length;
    return cantidad;
  }

  this.ejercicio5 = function (arreglo) {
    var palabra = "";
    var tamanio;
    for(var i in arreglo){
      palabra += arreglo[i].length;
    }
    palabra = palabra.split("");
    for(var i in palabra){
      palabra[i] = parseInt(palabra[i]);
    }
    
    tamanio = Math.max.apply(null, palabra);
    return tamanio;
  }
}
var ejercicios = new EjerciciosFunciones();


  // ********* PRUEBAS UNITARIAS ************

describe ("Ejercicios Funciones", function(){
  describe("Ejercicio 1", function () {
    it("Prueba de [1,10]", function () {
      assert.equal(55, ejercicios.ejercicio1([1,10]));
    });
  
  });

  describe("Ejercicio 2", function () {
    it("Prueba de ('Tamara', 22, 'Estudiante Laboratoria', 'Femenino')", function () {
      assert.equal("You are awesome", ejercicios.ejercicio2('Tamara', 22, 'Estudiante Laboratoria', 'Femenino'));
    });
   it("Prueba de ('Luisa', 29, 'Abogada', 'Femenino')", function () {
      assert.equal("Upsiii", ejercicios.ejercicio2('Luisa', 29, 'Abogada', 'Femenino'));
    });
   
  });

  describe("Ejercicio 3", function () {
    it("Prueba de [6,5,4,3,2,1]", function () {
      assert.deepEqual("propiedad1-->6 propiedad2-->5 propiedad3-->4 propiedad4-->3 propiedad5-->2 propiedad6-->1 ", ejercicios.ejercicio3(6,5,4,3,2,1));
    });
  });

  describe("Ejercicio 4", function () {
    it("Prueba de ('Blanca', 'Rios', 22, 'Femenino', 'Puebla', 'Mexico')", function () {
      assert.equal("Nombre : Blanca Rios" +"\nEdad : 22" +"\nPais: Mexico", ejercicios.ejercicio4("Blanca", "Rios", 22, "Femenino", "Puebla", "Mexico"));
    });
  });
});