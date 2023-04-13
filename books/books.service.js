// file that sees how CRUD with DB is going to happen 
//File Functions

const Books = require("./Books")

module.exports.list = async function(){
    //returns all list of book
    return await Books.find()
    //find function returns a promise that's why we need await 

}


module.exports.get = async function(id){
    //function that takes in ID and searches and fetches for it in the DB
    return await Books.findById({_id:id})
    //findById is a fucntion that returns 
    //the bracket content is a way of telling mongoDB
}



module.exports.create = function(payload){
    //function that takes in data and stores in db with a generated ID

    let book = Books(payload) //passing payload into the empty instance 'Books'
    book.save()
}



module.exports.update = async function(id, payload){
    //function that takes in data and stores in db with a generated ID
    return await Books.findByIdAndUpdate({_id: id}, payload)
}


module.exports.delete = async function(id){
    //function that takes in id and deletes it from db
    return await Books.findByIdAndDelete({_id: id}, payload)
}