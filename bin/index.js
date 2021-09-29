#! /usr/bin/env node

const chalk = require('chalk') ;
const inquirer = require('inquirer');
const searchUsers = require('./searchUsers');
const searchTickets = require('./searchTickets');

const error = chalk.bold.red;
const info = chalk.green;
const log = chalk.italic.blue;
const header = chalk.bold.white;
const bold = chalk.bold;


const initialSearchPrompt = {
  type: 'list',
  name: 'search',
  message: 'Please choose what you want to search',
  choices: ['users', 'tickets', 'quit'],
};

const userSearchTermPrompt = {
  type: 'list',
  name: 'searchTerm',
  message: 'Enter the search Term',
  choices: ['_id', 'name', 'created_at', 'verified'],
};

const searchValuePrompt = {
  type: 'input',
  name: 'searchValue',
  message: 'Enter the search Value'
}

const ticketSearchTermPrompt = {
  type: 'list',
  name: 'searchTerm',
  message: 'Enter the search Term',
  choices: ['_id', 'created_at', 'type', 'subject', 'assignee_id', 'tags'],
}

const promptForUserInfoSearch = () => {
  inquirer.prompt(userSearchTermPrompt).then((searchTerm) => {
    inquirer.prompt(searchValuePrompt).then((searchValue) => {
      const searchItem = {
        ...searchTerm,
        ...searchValue
      }
      console.log(info(`\n searching Users for ${bold(searchItem.searchTerm)} with a value of ${bold(searchItem.searchValue)}` ));
      const results = searchUsers.searchUser(searchItem);
      if(results.length){
        console.log(info(` \t ${results.length} results found. \n`))
        console.table(results)
      } else {
        console.log(info('Sorry, No results Found!'));
      }

    })
  });
}

const promptForTicketsInfoSearch = () => {
  inquirer.prompt(ticketSearchTermPrompt).then((searchTerm) => {
    inquirer.prompt(searchValuePrompt).then((searchValue) => {
      const searchItem = {
        ...searchTerm,
        ...searchValue
      }
      const results = searchTickets.searchTicket(searchItem);
      if(results.length){
        console.log(info(`${results.length} results have been found \n`))
        console.table(results)
      } else {
        console.log(info('Sorry, No results Found!'));
      }
    })
  });
}


const greeting = header("\n Welcome to My Cli Search \n");
console.log(greeting);
inquirer.prompt(initialSearchPrompt).then(response => {
  console.log(response);
  switch(response.search){
    case 'users':
      promptForUserInfoSearch();
      break;
    case 'tickets':
      promptForTicketsInfoSearch();
      break;
    case 'quit':
      console.log(log('\n Thank you for using searchCLI \n'));
      process.exit(0);
      break;
  }
});
