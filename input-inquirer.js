const inquirer=require ('inquirer');
const question=[{
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
inquirer.prompt(question).then(answer=>{
    console.log(answer);
})
