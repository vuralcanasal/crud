var Memorydb = require('../model/model');

// create
exports.create = (req, res)=>{
     // validate
     if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // create memory
    const memory = new Memorydb({
        memory: req.body.memory,
        language: req.body.language,
        date: req.body.date,
        who: req.body.who
    });

    // save the memory into the db
    memory
        .save(memory)
        .then(data => {
            res.redirect('/add-memory');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error during creating a create operation"
            });
        });

}

// update
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Updating data can not be empty"})
    }

    const id = req.params.id;
    Memorydb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update memory with ${id}`});
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error during updating memory information"});
        })
}

// find
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        Memorydb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Not found memory with id ${id}`});
            }
            else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({message: `Error during finding the memory id ${id}`});
        });
    }
    else{
        Memorydb.find()
        .then(memory => {
            res.send(memory)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error during finding memory information" });
        });
    }
}

// delete
exports.delete = (req, res)=>{
    const id = req.params.id;

    Memorydb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}`});
            }else{
                res.send({
                    message : "Memory was deleted successfully!"
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: `Could not delete memory with id  ${id}`
            });
        });
}

