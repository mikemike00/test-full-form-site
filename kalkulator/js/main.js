function get(num) {
    console.log(num)
let inputView = document.getElementById("wynik");
    inputView.value = inputView.value + num;
}
function equal(){
    var wartoscInputu = document.getElementById("wynik").value
    console.log(wartoscInputu)
    if(wartoscInputu)
        document.getElementById("wynik").value = eval(wartoscInputu);
    
    
}

function clean(){
    document.getElementById("wynik").value = ""
}