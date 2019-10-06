const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    post: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err
    console.log("connected")
    bamazonSupervisor()
});

function bamazonSupervisor(){
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View Product Sales by Department", "Create New Department", "Exit"],
            name: "choice"
        }
    ]).then(function(answer){
        switch(answer.choice){
            case "View Product Sales by Department":
                return productSales();
            case "Create New Department":
                return newDepartment();
            case "Exit":
                return connection.end();
        }
    })
}