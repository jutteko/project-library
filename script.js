function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

myLibrary = [];

const boek1 = new Book(
  "Cien Años De Solidad",
  "Gabriel García Marquez",
  422,
  true,
);
const boek2 = new Book("The Name Of The Rose", "Umberto Ecco", 512, false);
const boek3 = new Book("2666", "Roberto Bolaño", 1100, false);

myLibrary.push(boek1);
myLibrary.push(boek2);
myLibrary.push(boek3);

function displayBooks() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  // creëer de afzonderlijke onderdelen van de card
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.textContent = book.title;
    card.appendChild(title);
    const author = document.createElement("p");
    author.classList.add("author");
    const span = document.createElement("span");
    const italic = document.createElement("i");
    italic.append("by ");
    span.appendChild(italic);
    author.append(span, book.author);
    card.appendChild(author);
    const pages = document.createElement("p");
    pages.classList.add("author");
    pages.textContent = `🗐 ${book.pages} pages`;
    card.appendChild(pages);
    const btnRead = document.createElement("button");
    btnRead.classList.add("btn-read");
    btnRead.textContent = book.read ? "Read" : "Not read";
    card.appendChild(btnRead);
    btnRead.addEventListener("click", (e) => {
      myLibrary[index].read = !myLibrary[index].read;
      displayBooks();
    });
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", (e) => {
      myLibrary.splice(index, 1);
      displayBooks();
    });
    card.appendChild(btnDelete);
    //
    cardContainer.append(card);
  });
}

displayBooks();
