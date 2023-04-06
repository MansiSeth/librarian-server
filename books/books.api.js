




const Book = require("./Book");

module.exports.list = async function list(){
    return await Book.find()
}

module.exports.create = async function create(payload){
    try {
        let book = Book(payload)
        return await book.save(payload)
    } catch (error) {
        throw error
    }
}