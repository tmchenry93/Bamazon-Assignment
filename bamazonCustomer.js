var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection(
	{
		host: "localhost",
		port: 3306,
		user: "root",
		password: "localhost",
		database: "Bamazon"
	}
);

connection.connect(function(err){
	if (err) throw err;
});

connection.query("SELECT * FROM products", function(err, res){
	if (err) throw err;
	console.log(res);
});

inquirer.prompt([
	{
		name: "id",
		type: "input",
		message: "What is the id of the product you would like to buy?"
	},

	{
		name: "numberOfUnits",
		type: "input",
		messsage: "How many units of the product would you like to buy?"
	},
]).then(function(answer){
	console.log(answer);
});