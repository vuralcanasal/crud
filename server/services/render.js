const axios = require('axios');
const PORT = process.env.PORT || 8080

exports.homeRoutes = (req, res) => {
    //get request to /api/memories
    axios.get(`http://localhost:${PORT}/api/memories`)
    .then(function(response){
        res.render('index',{memories: response.data});
    })
    .catch(err=>{
        res.send(err);
    });
    
}

exports.add_memory = (req, res) =>{
    res.render('add_memory');
}

exports.update_memory = (req, res) =>{
    axios.get(`http://localhost:${PORT}/api/memories`, {params: {id:req.query.id}})
    .then(function(memoryData){
        res.render("update_memory", {memory: memoryData.data});
    })
    .catch(err=>{
        res.send(err);
    });
}