const CategoryEnum = require('../../enums/CategoryEnum');
const HygenHelper = require('../../helper/HygenHelper');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
      {
        type: 'select',
        name: 'category',
        message: 'Which Category is?',
        choices: Object.values(CategoryEnum),
      },
    ];
    return inquirer
      .prompt(questions)
      .then(HygenHelper.componentAnswerQuetions);
  },
};
