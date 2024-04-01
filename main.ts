#! /usr/bin/env node

import inquirer from "inquirer";


    let mybalance = 1000;
    let mypincode = 567;

    let pinanswer = await inquirer.prompt(
        [
            {
                name: "pin",
                message: "Enter your pin",
                type: "number",
            }
        ]
    );
    if (pinanswer.pin === mypincode) {
        console.log("Correct! Pin code");

        let operationAns = await inquirer.prompt(
            [
                {
                    name: "operation",
                    message: "Select the options",
                    type: "list",
                    choices: ["withdraw", "checkbalance"],
                },
            ]
        );
        console.log(operationAns);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "Enter your amount",
                        type: "number",
                    }
                ]
            );
            let withdrawalAmount = amountAns.amount;
            if (withdrawalAmount <= mybalance) {
                mybalance -= withdrawalAmount;
                console.log("Withdrawal successful. Your remaining balance is: $" + mybalance);
            } else {
                console.log("Insufficient balance. Your balance is: $" + mybalance);
            }
        } else if (operationAns.operation === "checkbalance") {
            console.log("Your balance is: $" + mybalance);
        }
    } else {
        console.log("Incorrect pin number");
    }


