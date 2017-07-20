//DIBUJOS

var n= prompt("Ingrese un numero");
var temp="";
strNum = "";

dibujo1(n);
dibujo2(n);
dibujo3(n);
dibujo4(n);
dibujo5(n);

function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

/*
DIBUJO 1:
1
12
123
1234
    4321
     321
      21
       1
 */


function dibujo1(n)
{   console.log("DIBUJO 1: ");
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 1; j <= i + 1; j++) {
            s += j;
        }
        console.log(s);
    }
    var e = espacios(n);
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = n - i; j >= 1; j--) {
             s += j;
        }
        console.log(e + s);
    }
}

/*
DIBUJO 2:
12345
1234
123
12
1
*/

function dibujo2(n){
    console.log("DIBUJO 2: ");
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 1; j <= n-i; j++) {
             s += j;
        }
        console.log(s);
    }
}

/*
DIBUJO 3:
    1
   121 
  12321
 1234321
123454321
 */

function dibujo3(n){
    console.log("DIBUJO 3: ");    
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 1; j <= i + 1; j++) {
           s += j;
        }
        var e = espacios (n - (i+1));
        for (var j = i; j >= 1; j--) {
            s += j;
        }
        console.log(e + s);
    }

}


/*
DIBUJO 4:
*
**
***
****
*****
******
*******
********
*********
*********
*********
********
*******
******
*****+
***
*
*/
function dibujo4(r){
 console.log("DIBUJO 4: ");    
 var x = 0;
 var circulo = [];
  
  while (x <= r) {   
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    } 
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
  }

  //genera un cuarto de circulo el de abajo - derecha
  for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (circulo[i]);
  }
  //genera un cuarto de circulo el de arriba - derecha
  for (var i = 0; i < circulo.length; i++) {
    console.log (circulo[i]);
  }
}

/*
DIBUJO 5:
       *  *  *
    *          *
  *              *
 *                *
 *                *
*/

function dibujo5(r){
  console.log("DIBUJO 5: ");     
  var x = 0;
  var circulo = [];
  var espacios = [];
  while (x <= r) {   
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    var e = "";
    for (var i = 0; i <= r - y; i++) {
       e += "  ";
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
    espacios.push (e);
  }
  for (var i = espacios.length -1; i >=0 ; i--) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
}