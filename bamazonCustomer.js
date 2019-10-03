// display items
// prompt user for ID
// please enter quantity
// check order
    // if not enough log err
    // else update database
        // show total cost
// done
// restart app

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    post: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err
    console.log("connected")
    loadProducts()
    connection.end()
});

function loadProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err
        console.table(res)
    })
}
