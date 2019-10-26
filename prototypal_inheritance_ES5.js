/*
1. Protoypal Inheritance
2. Use of static function in ES5

*/


function Book(title,author){
  this.title = title;
  this.author = author;
}

const book1 = new Book('Harry Potter','J.K. Rowling');
const book2 = new Book('Veronica Must Die','Paulo Coelho');

Book.prototype.getMsg = function(){
  return "The author of the book "+this.title+" is "+this.author;
}

Book.staticMsg = function(){
  return "Here is my static msg";
}

function Magazine(title, author ,category){
  Book.call(this, title, author); // in ES6 super is used. 
  this.category = category;
}
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Vogue','Anaita Shroff', 'Fashion');

console.log(book1.getMsg());
console.log(book2.getMsg());
console.log(Book.staticMsg());
console.log(mag1.getMsg());
