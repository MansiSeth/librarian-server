const { Schema, model } = require("mongoose"); //importing mongoose

//creating schema
const bookSchema = Schema ({

    // name: String you can do this but we need name as an object to make sure that mongoose inputs it as not empty and unique
    name:{
        type: String,
        require: true,
        unique: true
    }, //in db, name will still be a sting, it is just defined as an object

    description: String
})

module.exports = model('Book', bookSchema) //Now we export the schema as 'Book'