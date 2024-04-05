#! /usr/bin/env node

import inquirer from "inquirer";

let quest = await inquirer.prompt([
  {
    name: "confirmation",
    type: "list",
    message: "Do you Want to Sign in or Sign up?",
    choices: ["Sign in", "Sign up"],
  },
]);

if (quest.confirmation == "Sign in") {
  let ques1 = await inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "Enter your Username",
    },
    
    {
      name: "password",
      type: "password",
      message: "Enter your password",
    },
  ]);

  if (ques1.password == 37 && ques1.username == "Izma") {
    console.log("You succesfully entered in your account");
  } else {
    console.log("Invalid Username or password");
  }
}

if(quest.confirmation == "Sign up"){
    let ques2 = await inquirer.prompt([
        {
            name: "usname",
            type: "input",
            message: "Enter your Firstname",
          },
          {
            name: "lasname",
            type: "input",
            message: "Enter your Lastname",
          },
          {
            name: "email",
            type: "email",
            message: "Enter your Email ID",
          },
          {
            name: "mnumber",
            type: "number",
            message: "Enter your Mobile Number",
          },
          {
            name: "dob",
            type: "input",
            message: "Enter your Date of Birth",
          },
          {
            name: "passo",
            type: "password",
            message: "Create a Strong Password",
          },
    ]);
    console.log("You Succesfully created your account")
}
































