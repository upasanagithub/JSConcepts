class Book{
  constructor(title, author){
      this.title = title;
      this.author = author;
  }
  getMsg(){
    return "The author of the book "+this.title+" is "+this.author;
  }
}
const book1 = new Book('Harry Potter', 'J.K. Rowling');
const book2 = new Book('Veronica Wants to Die', 'Paulo Coelho');

console.log(book1.getMsg());
