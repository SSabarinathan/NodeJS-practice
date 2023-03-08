import prompt1 from 'inquirer';
const {prompt}=  prompt1;

const question=[{
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
prompt(question).then(answer=>{
    console.log('Hi ',answer, ' have a wonderful day!!');
})
