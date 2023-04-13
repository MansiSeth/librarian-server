
// const Book = require("./Book");

// module.exports.list = async function list(){
//     return await Book.find()
// }

// module.exports.create = async function create(payload){
//     try {
//         let book = Book(payload)
//         return await book.save(payload)
//     } catch (error) {
//         throw error
//     }
// }



const router = require('express').Router()

router.get("/", async function(req,res){
    //get request without id is for listing all books

    try {

        let list = await service.list()
        res.send(list)

    }catch (error){

        res.status(400).send(error)

    }
    

})

router.get("/:id", async function(req,res){
    try{
        let list = await service.get(req.params.id)
        res.send(list)
    }
    catch(error){
        res.status(400).send(error)
    }

})


router.post("/", async function(req,res){
    try{
        let list = await service.get(req.body)
        res.send(book)
    }
    catch(error){
        res.status(400).send(error)
    }


})

router.put("/:id", async function(req,res){
    try{
        let book = await service.update(req.params.id, req.body) //get gets it's id from path hence params
    }catch (error){

        res.status(400).send(error)

    }
})

router.delete("/:id", async function(req,res){

    try{
        await service.delete(req.params.id)
        res.send({msg: "book delete successful"})
    }catch (error){

        res.status(400).send(error)

    }
    
})

module.exports = router










