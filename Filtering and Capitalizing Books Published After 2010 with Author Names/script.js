const books = [
     {title: "book 1", author: "Author 1", year: 2002},
     {title: "book 2", author: "Author 2", year: 2005},
     {title: "book 3", author: "Author 3", year: 2007},
     {title: "book 4", author: "Author 4", year: 2012},
     {title: "book 5", author: "Author 5", year: 2018},
];

const filteredBooks = books 
 .filter (book => book.year > 2002)
 .map(book => ({
    title:book.title.toUpperCase(),
    author:book.author.toUpperCase(),
 }));

 console.log (filteredBooks);

