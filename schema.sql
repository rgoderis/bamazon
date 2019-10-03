DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department VARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT(10),
PRIMARY KEY(id)
);

INSERT INTO products(product_name, department, price, stock_quantity)
VALUES("Corvette", "AUTO", 50000.00, 5),