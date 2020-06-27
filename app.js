function getNumber(num){

var result = document.getElementById("result");
 result.value += num;

}

function Clrbtn(){
    var result = document.getElementById("result");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);

}