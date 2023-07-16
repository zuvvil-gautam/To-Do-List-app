

const TodoLists = require('../models/todo_list');

//function for redirecting to main homepage
module.exports.home = function(req,res){

    TodoLists.find(req.body)
    .then(todo => {
        console.log("Todo list fetched successfully");
        res.render('home', {
        title: 'ToDo app',
        todoList:todo
        });
    })
    .catch(err =>{
        console.log("Error in retrieving todo list");
        return;
    });
} 