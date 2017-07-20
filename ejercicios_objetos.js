//3 ejercicios con TDD
//*********Ejercicio 1******
var assert = require("assert");
function Rectangulo(base, altura)
{
    this.base = base;
    this.altura = altura;
    this.area = function(){
        if(isNaN(base) || isNaN(altura))
            return "Alguno de los dos valores no es un numero";
        return this.base * this.altura;
    };
}

var rectangulo1 = new Rectangulo(30, 10);
var rectangulo2 = new Rectangulo(30, "10");
var rectangulo3 = new Rectangulo("30", "hola");

describe("Pruebas Ejercicio 1 - Objetos", function(){
    it("base = 30 y altura = 10, area() = 300", function(){
       assert.equal(300, rectangulo1.area())
    });
    it("base = 30 y altura = \"10\", area() = 300", function(){
       assert.equal(300, rectangulo2.area())
    });
    it("base = \"30\" y altura = \"hola\", area() = Alguno de los dos valores no es un numero", function(){
       assert.equal("Alguno de los dos valores no es un numero", rectangulo3.area())
    });
});

//*********Ejercicio 2******

var assert = require("assert");
function Nacimiento(nombre, dia, mes, anio)
{
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.calcularEdad = function(){
        var resultado = 0;
        var fechaActual = new Date();
        if(this.mes == fechaActual.getMonth() + 1 && this.dia > fechaActual.getDate())
        {
            resultado = fechaActual.getFullYear() - this.anio - 1;
        }
        else if(this.mes > fechaActual.getMonth() + 1)
            resultado = fechaActual.getFullYear() - this.anio - 1;
        else
            resultado = fechaActual.getFullYear() - this.anio;
        return resultado; 
    };
}

var persona1 = new Nacimiento("Gaby", 21, 05, 1993);
var persona2 = new Nacimiento("Gaby", 23, 06, 1993);
var persona3 = new Nacimiento("Gaby", 24, 06, 1993);
var persona4 = new Nacimiento("Gaby", 21, 07, 1993);

describe("Pruebas Ejercicio 2 - Objetos", function(){
    it("nombre = Gaby, dia = 21, mes = 05, año = 1993, calcularEdad() = 24", function(){
       assert.equal(24, persona1.calcularEdad())
    });
    it("nombre = Gaby, dia = 23, mes = 06, año = 1993, calcularEdad() = 24", function(){
       assert.equal(24, persona2.calcularEdad())
    });
    it("nombre = Gaby, dia = 24, mes = 06, año = 1993, calcularEdad() = 23", function(){
       assert.equal(23, persona3.calcularEdad())
    });
    it("nombre = Gaby, dia = 21, mes = 07, año = 1993, calcularEdad() = 23", function(){
       assert.equal(23, persona4.calcularEdad())
    });
});

//*************Ejercicio 3 ***********

var assert = require("assert");
function Persona(nombre, edad, pasatiempo)
{
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
    this.presentar = function(){
        return "Hola soy " + this.nombre + " tengo " + this.edad + " años y me gusta " + this.pasatiempo;
    };
}

var persona1 = new Persona("Gaby", 24, "jugar videojuegos");

describe("Pruebas Ejercicio 3 - Objetos", function(){
    it("nombre = Gaby, edad = 24, pasatiempo = jugar videojuegos", function(){
       assert.equal("Hola soy Gaby tengo 24 años y me gusta jugar videojuegos", persona1.presentar())
    });
});

