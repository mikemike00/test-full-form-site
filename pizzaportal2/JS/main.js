//    funkcja pokazujaca formularz zamowienia START=============
$(function () {

    let order = {
        "imie": " ",
        "nazwisko": "",
        "ulica": "",
        "nrDomu": "",
        "kodPocz": "",
        "miasto": "",
        "sos": [],
        "pizza": "",

    }
    const pizza = [
        {

            id: 0,
            name: "wybierz",
            price: 0,
        },
        {
            id: 1,
            name: "Chłopska",
            price: 25,
        },
        {
            id: 2,
            name: "Wiejska",
            price: 30,
        },
        {
            id: 3,
            name: "Hawajska",
            price: 40,
        },
        {
            id: 4,
            name: "Calzone",
            price: 33,
        },
        {
            id: 5,
            name: "4sery",
            price: 33,
        }
        ]

$('#showOrder').click(function () {

    $(".order").css({
        "display": "block"
    })
})
//    funkcja pokazujaca formularz zamowienia END=============
let error = []
//    ===============pobieranie danych start=====
$('#send').click(function () {
    if (checkValue($("#imie").val())) {
        order.imie = $("#imie").val()

    } else {
        error.push("Nie podales imienia")
    }
    if (checkValue($("#nazwisko").val())) {
        order.nazwisko = $("#nazwisko").val()

    } else {
        error.push("Nie podales nazwisko")
    }
    if (checkValue($("#ulica").val())) {
        order.ulica = $("#ulica").val()
    } else {
        error.push("Nie podales ulicy")
    }
    if (checkValue($("#nrDomu").val())) {
        order.nrDomu = $("#nrDomu").val()
    } else {
        error.push("Nie podales nrDomu")
    }
    if (checkValue($("#kodPocz").val())) {
        order.kodPocz = $("#kodPocz").val()
    } else {
        error.push("Nie podales kodPocz")
    }
    if (checkValue($("#miasto").val())) {
        order.miasto = $("#miasto").val()
    } else {
        error.push("Nie podales miasta")
    }
    if ($('#czosnkowy').is(':checked')) {
        order.sos.push($('#czosnkowy').val())
    }
    if ($('#pomidorowy').is(':checked')) {
        order.sos.push($('#pomidorowy').val())
    }
    if (order.sos.length === 0){
        alert("Nie wybrales sosow")
        }
    $('mainSelect')
        
        console.log(order)
        console.log(error)
    error = []

})
//    pobieranie danych END==================




//    START FUNCKJA SPRAWDZAJACA ZZAWARTOSC POLA==========================
function checkValue(val) {
    if (val) {
        return true
    }

}

//    END FUNCKJA SPRAWDZAJACA ZZAWARTOSC POLA==========================
})
