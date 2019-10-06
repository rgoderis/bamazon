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
    
}