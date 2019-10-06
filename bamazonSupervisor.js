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
    });
}

function productSales(){
    // calculate product sales by department
    connection.query("SELECT departments.department_id, products.department, departments.over_head_costs, SUM(products.product_sales) as product_sales, SUM(products.product_sales) - departments.over_head_costs as total_profit FROM products INNER JOIN departments ON products.department = departments.department_name GROUP BY departments.department_id", function(err, res){
        if(err) throw err
        console.table(res)
    }) 
};