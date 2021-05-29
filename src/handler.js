const { nanoid } = require("nanoid");
const books = require("./books");

const addBookAllData = (request, h) =>{
  const {name, year, author, summary, publisher, pageCount , readePage} = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const  updatedAt = new Date().toISOString();
  const specBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readePage,
    finished,
    reading,
    insertedAt,
    updatedAt
}
  books.push(specBook);

  const nameReq = books.filter((books) => books.name === name).length < 0;
  if (nameReq){
    const response = h.response({
      status:"fail",
      message:"Gagal menambahkan buku. Mohon isi nama buku",
    });
      response.code(400)
      return response
  }else if (readePage > pageCount){
    const response = h.response({
      status:"fail",
      message:"Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
      response.code(400)
      return response
  }else if (null){
    const response = h.response({
      status:"fail",
      message:"Buku gagal ditambahkan",
    });
      response.code(500)
      return response
  }
  const response = h.response({
    status:"fail",
    message:"Buku berhasil ditambahkan",
    data:{
      dataId:`${id}`
    },
  });
    response.code(201)
    return response
}

const getBooks = () =>({

  status: 'success',
  data: {
    books: [
      {
        id:"",
        name:"",
        publisher:"",
      }
    ], 
  },
})

const showBookByID = () => {

}

module.exports = {addBookAllData, getBooks,  showBookByID};