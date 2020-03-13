function getBooks(){
  const booksId = document.getElementById('books')
    const rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    console.log(rowDiv)
    
    fetch('http://localhost:3000/books')
    .then(books => books.json())
    .then(books =>{
        books.forEach(element =>{
        const card = document.createElement('div')
        card.setAttribute('class','card')
        const cardBody=document.createElement('div')
        cardBody.setAttribute('class','card-body')
        const cardH5 = document.createElement('h5')
        cardH5.setAttribute('class','card-title')
        cardH5.innerHTML= element.title
                     
                    } );
    })
}
getBooks()