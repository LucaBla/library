document.getElementsByClassName('close-btn')[0].addEventListener("click", hidde)
document.getElementsByClassName('add-book')[0].addEventListener("click", hidde)
document.getElementsByClassName('create-book')[0].addEventListener("click", hidde)
document.getElementsByClassName('create-book')[0].addEventListener("click", createBook)
document.getElementsByClassName('create-book')[0].addEventListener("click", clearInput)

function hidde(){
  document.getElementsByClassName("modal-bg")[0].classList.toggle('hidden')
}

function clearInput(){
  inputs = document.getElementsByTagName('input')
  for(let i in inputs){
    inputs[i].value = ''
  }
}

let library = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return this.title + ' by ' + author + ', ' + pages + ' pages' + ', read:' + read
  }
}

Book.prototype.changeStatus = function() {
  if (this.book.read === false){
    this.book.read = true
    this.innerHTML = 'read: <i class="fas fa-check-circle"></i>'
  }
  else{
    this.book.read = false
    this.innerHTML = "read: <i class='fas fa-times-circle'></i>"
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

function createBook(){
  newBook = new Book(document.getElementById('title').value,
                    document.getElementById('author').value,
                    document.getElementById('pages').value,
                    document.getElementById('read').checked)
  addBookToLibrary(newBook)
  displayBook(library.length-1)
}

function displayBook(index){
  let div = document.getElementsByClassName('library')[0].appendChild(document.createElement('div'))
  div.classList.add('book')

  bookRead = div.appendChild(document.createElement('p'))
  bookRead.classList.add('read')
  bookRead.book = library[index]
  bookRead.addEventListener('click', library[index].changeStatus)
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

  bookDeleteBtn = div.appendChild(document.createElement('button'))
  bookDeleteBtn.appendChild(document.createTextNode('Delete'))
  bookDeleteBtn.classList.add('delete-book')
  bookDeleteBtn.book = library[index]
  bookDeleteBtn.index = index
  bookDeleteBtn.div = div
  bookDeleteBtn.addEventListener("click", removeBook)
}

function removeBook(){
  library.splice(library.findIndex(item => item.title === this.book.title), 1);
  delete this.book
  this.div.remove()
}

//const book1 = new Book('Star Wars', 'George Lucas', 345, true)
//const book2 = new Book('Laura: The Adventure', 'Läusel Keil', 35, false)
//const book3 = new Book('Apfel essen leicht gemacht', 'Läusel Keilo', 5601, false)
//addBookToLibrary(book1)
//addBookToLibrary(book2)
//addBookToLibrary(book3)
//displayLibrary()
