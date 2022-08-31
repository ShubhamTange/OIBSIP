
function display(number){
    document.getElementById("result").value += number; 
}
function calculate(){
    var result = document.getElementById("result").value ;
    var x = eval(result);
    document.getElementById("result").value = x;
}
function clearScr(){
    document.getElementById("result").value = "";
}
function backspace(){
    var rek = document.getElementById("result").value;
    document.getElementById("result").value = rek.substring(0,rek.length-1);
}