class Book{
  constructor(title, author){
      this.title = title;
      this.author = author;
  }
  getMsg(){
    return "The author of the book "+this.title+" is "+this.author;
  }
}

class Magazine extends Book{
  constructor(category, title, author){
    super(title, author);
    this.category = category;
  }
}



const book1 = new Book('Harry Potter', 'J.K. Rowling');
const book2 = new Book('Veronica Wants to Die', 'Paulo Coelho');

const mag1 = new Magazine('Fashion', 'Vogue', 'Anaita Shroff');



console.log(book1.getMsg());
console.log(mag1.getMsg());
