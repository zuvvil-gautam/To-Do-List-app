

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

// function for new Data
function DateValeu(dueDate) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] // static value for implementing monthe value


    newdate = '';
    let monapp = '';
    // checking months 
    if (dueDate[1] == '01') {
        monapp = months[0];
    }
    else if (dueDate[1] == '02') {
        monapp = months[1];
    } else if (dueDate[1] == '03') {
        monapp = months[2];
    } else if (dueDate[1] == '04') {
        monapp = months[3];
    } else if (dueDate[1] == '04') {
        monapp = months[3];
    } else if (dueDate[1] == '05') {
        monapp = months[4];
    } else if (dueDate[1] == '06') {
        monapp = months[5];
    } else if (dueDate[1] == '07') {
        monapp = months[6];
    } else if (dueDate[1] == '08') {
        monapp = months[7];
    } else if (dueDate[1] == '09') {
        monapp = months[8];
    } else if (dueDate[1] == '10') {
        monapp = months[9];
    } else if (dueDate[1] == '11') {
        monapp = months[10];
    } else if (dueDate[1] == '12') {
        monapp = months[11];
    }
    newdate = dueDate[2] + '-' + monapp + '-' + dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}


