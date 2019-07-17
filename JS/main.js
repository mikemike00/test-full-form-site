console.log("hhhh")

//function zmienTlo() {
//    document.getElementById("firstP").style.backgroundColor = "red";
//
//
//
//}

function zmienTlo2() {

    document.getElementById("secondP").style.backgroundColor = "green";

}

function zmienTlo() {
    console.log('click');
    document.getElementById("firstP").style.backgroundColor = "white";
    document.getElementById("firstP").style.color = "red";

}
document.getElementById("btn-main").addEventListener("click", zmienTlo);

function zmienTlo2() {
    console.log('click');
    document.getElementById("secondP").style.backgroundColor = "blue";
    document.getElementById("secondP").style.color = "violet";

}
// document.getElementById("btn-secondmain").addEventListener("click", zmienTlo2);

function parAddText() {

    for (let i = 0; i < document.getElementsByClassName("par").length; i++) {
        document.getElementsByClassName("par")[i].innerHTML = "Jestem " + [i + 1] +
            " paragrafem"
    }

}
document.getElementById("btn-main").addEventListener("click", parAddText);
