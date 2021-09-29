### My Search CLi

The Following Project is a simple command line application to search the data and return the results in a human readable format. User will  be able to search from the two options provided (Users/Tickets) at a time. For the sake of simplicity, the search is based on the contents of the file defined in json format which is stored in this repository under the /data section.

#### Dependencies
The application is developed in NodeJs and the user will require Node version 14 to execute the CLI.
The application makes use of the inquirer for the interactive command line interface.


#### Getting Started
To get started with the application, first make sure you have Node14 or later installed.
Then clone the repository and install the repository dependencies

  ``` yarn install ```  or  ``` npm install  ```

You can start the application with the command  ```search``` in your terminal.

#### Testing
Tests have been written in Jest.
To run the tests  use ```yarn test```  or   ``` npm run test  ``` in your terminal

#### Key Features
- search is based on the on the file contents
- user will be provided with options to search the items based on the initial search selection item
- The search value is case-sensitive
- Empty strings inputs will result in Not Found Message
- Incorrect entries will return with Not Found message


#### What can be improved
- effective display
- At the moment, the user can search only once. The user must execute the command for every search. This can be improvised. Allow search options until the user quits search.
- At the moment, we use file based search, this can be extended to search using real time data
- The tests written are only for the search functionality. Testing coverage can be improved.
