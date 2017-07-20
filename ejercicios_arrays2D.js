//Ejercicios 
var n = 5;
function espacios(n) 
{
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

for (var i = 0; i < n; i++)
{
  var s = "";
  for (var j = 1; j <= i + 1; j++)
  {
    s += j;
  }
  var e = espacios (n - (i+1));
  for (var j = i; j >= 1; j--) 
  {
    s += j;
  }
  console.log(e + s);
}

//"    1"
//"   121"
//"  12321"
//" 1234321"
//"123454321"

var num = 5;
function espacios(num) 
  {
    var espacios = "";
    for (var i = 0; i < num; i++)
      espacios += " ";
    return espacios;
  }

function quiz2(num)
{
  for (var i = 0; i < num; i++) 
  {
      var numeros = "";
      for (var j = 1; j <= num - i; j++) 
      {
        numeros += j;
      }
      console.log(numeros);
  }  
  
}
function quiz4 (r) 
{
  //for (var x = 0; x < r; x++) {  
  //}  
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
    console.log (espacios[i] + circulo[i] + "," + circulo[i] );
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
}

function quiz1(num) {
  for (var i = 0; i < num; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    console.log(s);
  }
  var e = espacios(num);
  for (var i = 0; i < num; i++) {
      var s = "";
      for (var j = num - i; j >= 1; j--) {
        s += j;
      }
      console.log(e + s);
  }  
}

function quiz3(num) {
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

//quiz1(num);
quiz2(num);

//"12345"
//"1234"
//"123"
//"12"
//"1"