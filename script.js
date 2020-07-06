let arr = [];
function popclick() {
arr.pop();
displaylen();
document.getElementById("value").value ="";
}
function pushclick(){
  let value  = document.getElementById("value").value;
  arr.push(value);
  displaylen();
  document.getElementById("value").value = "";
}
function shiftclick(){
  let value = document.getElementById("value").value;
  arr.shift(value);
  displaylen();
  document.getElementById("value").value = "";
}
function displaylen() {
  document.getElementById("length").innerHTML = "Length is " + arr.length;
  document.getElementById('arr').innerHTML = "Array = " +"[" + arr + "]";
}
function unshiftclick()
{
  let value = document.getElementById("value").value;
  arr.unshift(value);
  displaylen();
  document.getElementById("value").value="";
}
