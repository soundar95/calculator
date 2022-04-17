function add(){
  var num1= parseInt( document.getElementById("first").value);
  var num2=  parseInt( document.getElementById("second").value);
var result=num1+num2;
document.getElementsByClassName("output")[0].innerHTML="addition is:" +result;
}
function sub(){
    var num1= parseInt( document.getElementById("first").value);
    var num2=  parseInt( document.getElementById("second").value);
  var result=num1-num2;
  document.getElementsByClassName("output")[0].innerHTML="subtraction is:" +result;
  }
  function mul(){
    var num1= parseInt( document.getElementById("first").value);
    var num2=  parseInt( document.getElementById("second").value);
  var result=num1*num2;
  document.getElementsByClassName("output")[0].innerHTML="Multiplication is:" +result;
  }
  function div(){
    var num1= parseInt( document.getElementById("first").value);
    var num2=  parseInt( document.getElementById("second").value);
  var result=num1/num2;
  document.getElementsByClassName("output")[0].innerHTML="Divison is:" +result;
  }