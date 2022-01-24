/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars
{
  'use strict';

  // start referencje

  const select = {
    
    containerOf: {
      list: '.books-list',
      image: '.book__image',
    },

    templateOf: {
      book: '#template-book',
    },

  };

  const templates = { 
    book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  // koniec referencje

  // start funkcji

  function render() {   
    //przechodzę po kazdym elemencie z 
    for(let book of dataSource.books) {
      // generowanie kod-u HTML
      const generateHTML = templates.book(book);
      // tworzenie elementu DOM
      const element = utils.createDOMFromHTML(generateHTML);
      // znajduje odpowiednie miejsce do umieszczenia kodu
      const bookContainer = document.querySelector(select.containerOf.list);
      // umieszcza odpowiednią pozycję ksiązki
      bookContainer.appendChild(element);
    }
  }

  function initActions() {
    const favoriteBooks = [];
    // console.log('favoriteBooks', favoriteBooks);
    const bookImages = document.querySelectorAll(select.containerOf.image);
    // console.log('bookList', booksList);
    // console.log('bookImages', bookImages);
    for (let image of bookImages) {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        const bookID = image.getAttribute('data-id');
        console.log(favoriteBooks);
        favoriteBooks.push(bookID);
        if (favoriteBooks.includes(bookID)) {
          image.classList.toggle('favorite');
        }
      });


    }
  } 

  render();
  initActions();
}