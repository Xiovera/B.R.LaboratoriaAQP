//4 ejercicios con TDD
//***********Ejercicio 1**************
function ejercicio1(numInicial, numFinal)
{
    var objeto = {
        inicio: numInicial,
        fin: numFinal,
        sumar: function(){
            var suma = 0;
            if(isNaN(this.inicio) || isNaN(this.fin))
            {
                return "Alguno de los dos valores no es un numero";        
            }
            for(var i = this.inicio; i <= this.fin; i++)
            {
                suma += i;
            }
            return suma;
        }
    };
    return objeto.sumar();
}
var assert = require("assert");
describe("Prueba ejercicio 1", function(){
    it("Pruebas con 1 y 10, debe salir 55", function(){
        assert.equal(55, ejercicio1(1, 10));
    });
    it("Pruebas con 1 y hola, debe salir Alguno de los dos valores no es un numero", function(){
        assert.equal("Alguno de los dos valores no es un numero", ejercicio1(1, "hola"));
    });
});

//***********Ejercicio 2**************

function ejercicio2(nombre, edad, ocupacion, genero)
{
    function SuperCoder(nombre, edad, ocupacion, genero)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
        this.genero = genero;
        this.mensaje = function(){
            if(this.edad > 17 && (this.ocupacion == "Web Developer" || this.ocupacion == "Estudiante Laboratoria"))
            {
                return "You're awesome"
            }
            else
                return "Upsi"
        }
    }

    var superCoder = new SuperCoder(nombre, edad, ocupacion, genero);
    return superCoder.mensaje();
}

var assert = require("assert");
describe("Prueba ejercicio 2", function(){
    it("Pruebas con Tamara, 22, Estudiante Laboratoria, Femenino, debe salir You're awesome", function(){
        assert.equal("You're awesome", ejercicio2("Tamara", "22", "Estudiante Laboratoria", "Femenino"));
    });
    it("Pruebas con Gaby, 17, Estudiante Laboratoria, Femenino debe salir Upsi", function(){
        assert.equal("Upsi", ejercicio2("Gaby", 17, "Estudiante Laboratoria", "Femenino"));
    });
});
//***********Ejercicio 3**************

function ejercicio3(arreglo)
{
    var texto = {};
    for(var i = 1; i <= arreglo.length; i++)
    {
        texto["propiedad" + i] = arreglo[i-1];
    }
    var propiedades = Object.keys(texto);
    var resultado = "";
    for(var i = 0; i < arreglo.length; i++)
    {
        resultado += propiedades[i] + "-->" + arreglo[i] + ";";
    }
    resultado = resultado.slice(0, -1);
    return resultado;
}
var assert = require("assert");
describe("Prueba ejercicio 3", function(){
    it("Pruebas con arreglo[6, 5, 4, 3, 2, 1]", function(){
        assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", ejercicio3([6, 5, 4, 3, 2, 1]));
    });
    it("Pruebas con arreglo[6, 5, 4, 3, 2, 1]", function(){
        assert.equal("propiedad1-->7;propiedad2-->6;propiedad3-->5;propiedad4-->4;propiedad5-->3;propiedad6-->2;propiedad7-->1", ejercicio3([7, 6, 5, 4, 3, 2, 1]));
    });
});
//***********Ejercicio 4**************
function ejercicio4(nombre, apellido, edad, genero, ciudad, pais)
{
    function Paciente(nombre, apellido, edad, genero, ciudad, pais)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.ciudad = ciudad;
        this.pais = pais;
        this.ficha = function(){
            return "Nombre: " + this.nombre + " " + this.apellido + "\nEdad: " + this.edad + "\nPais: " + this.pais;
        }
    }

    var paciente1 = new Paciente(nombre, apellido, edad, genero, ciudad, pais);
    return paciente1.ficha();
}

var assert = require("assert");
describe("Prueba ejercicio 4", function(){
    it("Pruebas con Blanca, Perez, 19, Femenino, Santiago, Chile", function(){
        assert.equal("Nombre: Blanca Perez\nEdad: 19\nPais: Chile", ejercicio4("Blanca", "Perez", 19, "Femenino", "Santiago", "Chile"));
    });
});