const fibonacci = () => {
  let lv = document.getElementById('lv').value;
  if (lv <= 10) {
    var numUno = 0;
    var numDos = 1;
    var resultado;
    var i = 0;
    for (i = 0; i < lv; i++) {
      resultado = numUno + numDos;
      numUno = numDos;
      numDos = resultado;
    }
    document.getElementById('resultado').innerHTML = 'Result: ' + numDos;
  } else {
    document.getElementById('resultado').innerHTML = 'Usa número entre 1 y 10';
  }
};
/////////////////////////////////////////////////////////
const factorial = () => {
  let lvl = document.getElementById('lvl').value;
  if (lvl <= 10) {
    var total = 1;
    for (i = 1; i <= lvl; i++) {
      total = total * i;
    }
    document.getElementById('result').innerHTML = 'Result:' + total;
  } else {
    document.getElementById('result').innerHTML = 'Usa número entre 1 y 10';
  }
};

/* console.log(factorial()); */
