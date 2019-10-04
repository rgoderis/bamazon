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
    console.log("connected");
    bamazonManager()
});

function bamazonManager(){
    inquirer.prompt([
        {
            type: "list",
            message: "please select what you would like to do",
            choices: ["View All Products", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"],
            name: "startChoice"
        }
    ]).then(function(answer){
        switch(answer.startChoice){
            // view products for sale
            case "View All Products":
                return view();
            // view low inventory
            case "View Low Inventory":
                return lowInventory();
            // add to inventory
            case "Add to Inventory":
                return addInventory();
            // add new product
            case "Add New Product":
                return addProduct();
            // exit bamazonManager
            case "Exit":
                return connection.end();
        }
    });
}

// function to view all products
function view(){
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err
        console.table(res);
        bamazonManager();
    })
}

// function to view all products with low inventory
function lowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity < 10", function(err, res){
        if(err) throw err
        console.table(res);
        bamazonManager();
    })
}
