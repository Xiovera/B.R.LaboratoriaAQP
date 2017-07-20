var A = [[1, 1, 1], [2, 2, 2]];
var B = [[3, 3, 3], [2, 2, 2]];
var C = [[0, 0, 0], [0, 0, 0]];
for(var i = 0; i < A.length; i++)
{
  for(var j = 0; j < A[i].length; j++)
  {
    C[i][j] = A[i][j] + B[i][j];
  }
}
//console.log(C);

function crearMatriz(num1, num2)
{
  var a = [];
  for(var i = 0; i < num1; i++)
  {
    a[i] = [];
    for(var j = 0; j < num2; j++)
    {
      a[i].push(0);
    } 
  }
  return a;
}

function matriz5(num)
{
  var a = crearMatriz(num, num);
  for(var i = 0; i < num; i++)
  {
    var k = i;
    for(var j = 0; j < num - i; j++)
    {
      k++;
      a[i][j] = k;
    }
    for(var j = num - i; j < num; j++)
    {
      k--;
      a[i][j] = k;
    }
    console.log(a[i]);
  }
}
matriz5(5);

function matriz1(num)
{
  var a = crearMatriz(num, num);  
  for(var i = 0; i < num; i++)
  {
    var k = 1;
    for(var j = num - i - 1; j < num; j++)
    {
      a[i][j] = k;
      k++;
    }
    console.log(a[i]);
  }
}
//matriz1(5);

function matriz2(num)
{
  var a = crearMatriz(num, num);  
  for(var i = 0; i < num; i++)
  {
    var k = num - i;
    for(var j = 0; j < num - i; j++)
    {
      a[i][j] = k;
      k--;
    }
    console.log(a[i]);
  }
}
//matriz2(4);

function matriz3(num1, num2)
{
  num2 = num1 * 2 - 1;
  var a = crearMatriz(num1, num2);  
  for(var i = 0; i < num1; i++)
  {
    var k = 0;
    for(var j = num1 - i - 1; j < num1; j++)
    {
      k++;
      a[i][j] = k;
    }
    for(var j = num1; j < num1 + i; j++)
    {
      k--;
      a[i][j] = k;
    }    
    console.log(a[i]);
  }
}
//matriz3(9);

function matriz4(num)
{
  var a = crearMatriz(num, num);  
  var k = 1;
  var l = num;
  for(var i = 0; i < num; i++)
  {
    a[i][i] = k++;
    a[i][num - i - 1] = l--;  
    console.log(a[i]);
  }
}
//matriz4(5);

//[1, 2, 3, 4, 5]
//[2, 3, 4, 5, 4]
//[3, 4, 5, 4, 3]
//[4, 5, 4, 3, 2]
//[5, 4, 3, 2, 1]