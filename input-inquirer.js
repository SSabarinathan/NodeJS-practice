import { prompt } from 'inquirer';
const question=[{
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
prompt(question).then(answer=>{
    console.log(answer);
})
