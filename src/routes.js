const { addBookAllData, getBooks, showBookByID } = require("./handler")

const routes = [
  {
    method:'POST',
    path:'/books',
    handler: addBookAllData,
  },
  {
    method:'GET',
    path:'/books',
    handler: getBooks,
  },
  {
    method:'GET',
    path:'/books/{id}',
    handler: showBookByID,
  }
]

module.exports = routes