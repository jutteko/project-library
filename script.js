function Book(title, autor, pages, read) {
  this.title = title;
  this.autor = autor;
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
}
