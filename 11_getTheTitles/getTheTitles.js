const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

const getTheTitles = (books)=> {
    let result = books.map(book => book.title);
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
