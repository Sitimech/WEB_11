console.log('start');
var rez = document.getElementById('var_s');

function calc_click_kvadrat(){
  var a = document.getElementById('var_a').value;

  var s = a * a;
  rez.innerHTML = s;
}

var rez2 = document.getElementById('var_v');
function calc_click_konys(){
  var r = document.getElementById('var_r').value;
  var h = document.getElementById('var_h').value;

  var v = (1/3)*Math.PI*r*r*h;
  rez2.innerHTML = v;
}