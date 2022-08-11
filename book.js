let library = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return title + ' by ' + author + ', ' + pages + ' pages' + ', read:' + read
  }
}

function addBookToLibrary(book) {
  library.push(book)
}

function displayLibrary(){
  for(let i in library){
    displayBook(i)
  }
}

function displayBook(index){
  let div = document.getElementsByClassName('library')[0].appendChild(document.createElement('div'))
  div.classList.add('book')

  bookRead = div.appendChild(document.createElement('p'))
  bookRead.classList.add('read')
  if (library[index].read === true){
    bookRead.innerHTML = 'read: <i class="fas fa-check-circle"></i>'
  }
  else{
    bookRead.innerHTML = "read: <i class='fas fa-times-circle'></i>"
  }
  

  bookTitle = div.appendChild(document.createElement('h2'))
  bookTitle.classList.add('title')
  bookTitle.appendChild(document.createTextNode(library[index].title))

  bookAuthor = div.appendChild(document.createElement('p'))
  bookAuthor.classList.add('author')
  bookAuthor.appendChild(document.createTextNode(library[index].author))

  bookPages = div.appendChild(document.createElement('p'))
  bookPages.classList.add('pages')
  bookPages.appendChild(document.createTextNode(library[index].pages + ' pages'))
  
}

const book1 = new Book('Star Wars', 'George Lucas', 345, true)
const book2 = new Book('Laura: The Adventure', 'Läusel Keil', 35, false)
const book3 = new Book('Apfel essen leicht gemacht', 'Läusel Keilo', 5601, false)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
displayLibrary()
