function getDataToday() {
    const dataToDay = new Date()
    console.log()
    const year = dataToDay.getFullYear()
    const month = dataToDay.getMonth() + 1
    const day = dataToDay.getDate()
    const spanData = document.getElementById('spanData')
    spanData.innerHTML = day + '/' + month + '/' + year
}
getDataToday()
let inputCheckboxesContentValue = ''



function getInput(){
 const inputCheckboxesContent = document.getElementsByName('tabelka')
    

    for (let i = 0; i < inputCheckboxesContent.length; i++) {

        if (inputCheckboxesContent[i].checked === true) {
            inputCheckboxesContentValue = inputCheckboxesContent[i].value
        }

    }

}


function getTable() {
getInput()
   
    console.log(`http://api.nbp.pl/api/exchangerates/tables/${inputCheckboxesContentValue}/?format=json`)
    fetch(`http://api.nbp.pl/api/exchangerates/tables/${inputCheckboxesContentValue}/?format=json`)
        .then(tabelaNBP => tabelaNBP.json())
        .then(tabelaNBP => {

            const elementApp = document.getElementById('app')
            elementApp.innerHTML = " "
            for (let i = 0; i < tabelaNBP[0].rates.length; i++) {
                console.log(tabelaNBP[0].rates[i])
                let divClassCard = document.createElement('div')
                divClassCard.classList.add('card')
                let divCardBody = document.createElement('div')
                divCardBody.classList.add('card-body')

                //        created h5
                let elementH5 = document.createElement('h5')
                elementH5.classList.add('card-title')
                let elementH5Text = document.createTextNode(tabelaNBP[0].rates[i].currency)
                elementH5.appendChild(elementH5Text)
                divCardBody.appendChild(elementH5)

                //        element p1

                let elementP1 = document.createElement('p')
                elementP1.classList.add('card-text')
                let elementP1Text = document.createTextNode(tabelaNBP[0].rates[i].code)
                elementP1.appendChild(elementP1Text)
                divCardBody.appendChild(elementP1)


                //        element p2
                if (inputCheckboxesContentValue === "c") {
                    console.log("tabela C")
                    let elementP2 = document.createElement('p')
                    elementP2.classList.add('card-text')
                    let elementP2Text = document.createTextNode(tabelaNBP[0].rates[i].ask + " and " + tabelaNBP[0].rates[i].bid)
                    elementP2.appendChild(elementP2Text) 
                    divCardBody.appendChild(elementP2)


                } else {

                    let elementP2 = document.createElement('p')
                    elementP2.classList.add('card-text')
                    let elementP2Text = document.createTextNode(tabelaNBP[0].rates[i].mid)
                    elementP2.appendChild(elementP2Text)
                    divCardBody.appendChild(elementP2)

                }






                divClassCard.appendChild(divCardBody)
                elementApp.appendChild(divClassCard)
            }


        })

}

//document.getElementsByClassName('mainBtn')[0].addEventListener('click',getTable )
getTabelaWithDataDay(){
    getInput()
    
    
}

function a(){

fetch(`http://api.nbp.pl/api/exchangerates/tables/${inputCheckboxesContentValue}/${dataCalendar}/?format=json`)
        .then(tabelaNBP => tabelaNBP.json())
        .then(tabelaNBP => {

            const elementApp = document.getElementById('app')
            elementApp.innerHTML = " "
            for (let i = 0; i < tabelaNBP[0].rates.length; i++) {
                console.log(tabelaNBP[0].rates[i])
                let divClassCard = document.createElement('div')
                divClassCard.classList.add('card')
                let divCardBody = document.createElement('div')
                divCardBody.classList.add('card-body')

                //        created h5
                let elementH5 = document.createElement('h5')
                elementH5.classList.add('card-title')
                let elementH5Text = document.createTextNode(tabelaNBP[0].rates[i].currency)
                elementH5.appendChild(elementH5Text)
                divCardBody.appendChild(elementH5)

                //        element p1

                let elementP1 = document.createElement('p')
                elementP1.classList.add('card-text')
                let elementP1Text = document.createTextNode(tabelaNBP[0].rates[i].code)
                elementP1.appendChild(elementP1Text)
                divCardBody.appendChild(elementP1)


                //        element p2
                if (inputCheckboxesContentValue === "c") {
                    console.log("tabela C")
                    let elementP2 = document.createElement('p')
                    elementP2.classList.add('card-text')
                    let elementP2Text = document.createTextNode(tabelaNBP[0].rates[i].ask + " and " + tabelaNBP[0].rates[i].bid)
                    elementP2.appendChild(elementP2Text) 
                    divCardBody.appendChild(elementP2)


                } else {

                    let elementP2 = document.createElement('p')
                    elementP2.classList.add('card-text')
                    let elementP2Text = document.createTextNode(tabelaNBP[0].rates[i].mid)
                    elementP2.appendChild(elementP2Text)
                    divCardBody.appendChild(elementP2)

                }






                divClassCard.appendChild(divCardBody)
                elementApp.appendChild(divClassCard)
            }


        })

}

}