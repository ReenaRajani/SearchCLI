### My Search CLi

The Following Project is a simple command line application to search the data and return the results in a human readable format. User will  be able to search from the two options provided (Users/Tickets) at a time. For the sake of simplicity, the search is based on the contents of the file defined in json format which is stored in this repository under the /data section.


#### Dependencies
The application is developed in NodeJs and the user will require Node version 14 to execute the CLI.

#### Getting Started
To get started with the application, first make sure you have Node14 or later installed.
Then clone the repository and install the repository dependencies
  ``` yarn install my-cli-search -g ```

You can start the application with the command  ```search``` in your terminal.


#### Key Features
- search is based on the on the file contents
- user will be provided with options to search the items based on the initial search selection item
- The search value is case-sensitive
- Empty strings inputs will result in Not Found Message
- Incorrect entries will return with Not Found message
