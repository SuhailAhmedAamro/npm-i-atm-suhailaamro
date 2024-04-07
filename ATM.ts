#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 5000;
let mypin = 1234;
let pincode = await inquirer.prompt([
  { name: "pin", message: "Enter Your Pin", type: "number" },
]);
if (pincode.pin === mypin) {
  console.log("Please Correct pin code");
  let operation = await inquirer.prompt([
    {
      name: "operation",
      message: "please Select option",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"],
    },
  ]);
  {
    console.log(operation.operation);
  }
  if (operation.operation === "Withdraw") {
    let amount = await inquirer.prompt([
      { name: "amount", message: "Enter Your Amount", type: "number" },
    ]);
    if (amount.amount > myBalance) console.log("insufficient Balance");
    else {
      myBalance === amount.amount;
      console.log(`Your remanig balance is ${myBalance}`);
    }
  } else if (operation.operation === "fast Cash") {
    let fast = await inquirer.prompt([
      {
        name: "fastCash",
        message: "select the amount which you withdraw",
        type: "list",
        choices: [
          "500",
          "1000",
          "1500",
          "2000",
          "2500",
          "3000",
          "3500",
          "4000",
          "4500",
          "5000",
          "5500",
        ],
      },
    ]);
    myBalance -= fast.fastCash;
    console.log(
      `Your have Successfully withdraw ${fast.fastCash},\n Your ramining Balance is ${myBalance} `
    );
  } else if (operation.operation === "Check Balance") {
    console.log(`Your Balance id ${myBalance}`);
  } else {
    console.log("incorrect pin number");
  }
}
