function getSelect() {
	fetch('http://localhost:3000/selectGatunek')
		.then(res => res.json())
		.then(res => {
			let mainSelect = document.getElementById('gatunek')
			let optionElement = document.createElement('option')
			res.forEach(element => {
				let optionElement = document.createElement('option')
				optionElement.value = element.id
				optionElement.innerText = element.name
				mainSelect.appendChild(optionElement)
			});
		})
}

getSelect()

document.getElementById('mainBtn').addEventListener('click', createBook)

function createBook(e) {
	e.preventDefault()
	let book = {
		title: String,
		author: String,
		description: String,
		type: Number
	}
	const allData = document.getElementsByClassName('form-control')
	for (let i = 0; i < allData.length; i++) {
		if (allData[i].id == 'tytul') {
			book.title = allData[i].value
		}
		if (allData[i].id == 'autor') {
			book.author = allData[i].value
		}
		if (allData[i].id == 'opis') {
			book.description = allData[i].value
		}
		if (allData[i].id == 'gatunek') {
			book.type = allData[i].value
		}
	}
	console.log(book)
	fetch('http://localhost:3000/books', {
			method: 'POST',
			body: JSON.stringify(book),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(res => alert('Dodano pozycję do katalogu')
			.catch(error => console.log(error))
		)
	createBook()
}

function getBooks() {
	document.getElementById('app').innerHTML = ''
	fetch('http://localhost:3000/books')
		.then(res => res.json())
		.then(res => {
			res.forEach(book => {
				const containerApp = document.getElementById('app')
				const showAll = document.createElement('div')
				showAll.classList.add('begin')
				const author = document.createElement('h2')
				const title = document.createElement('h3')
				const type = document.createElement('h5')
				var description = document.createElement('p')

				containerApp.appendChild(showAll)
				showAll.appendChild(author)
				showAll.appendChild(title)
				showAll.appendChild(type)
				showAll.appendChild(description)
				var btnEdit = document.createElement('button')
				btnEdit = document.innerHTML('edytuj')
				showAll.appendChild(btnEdit)
			})
		})
}

getBooks()