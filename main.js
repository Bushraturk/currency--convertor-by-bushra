import inquirer from "inquirer";
import chalk from "chalk";
//Define the list of currencies and their exchange rates
console.log(chalk.cyan.bold("\n \twellcome to currency convertor \n"));
let exchange_rate = {
    USD: 1, //Base currency
    EUR: 0.9, //european currency(Eruo)
    JYP: 113, //japenese currency )(yen)
    CAD: 1.3, //canadian Dollar
    AUD: 1.65, //Australian Dollar
    PKR: 277.70, //pakistani Rupees
    //Add more currencies and their exchange rates here
};
//promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: " select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    },
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the convertd amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
