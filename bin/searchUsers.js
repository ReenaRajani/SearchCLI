const fs = require('fs');

const userData = JSON.parse(fs.readFileSync('./data/users.json'));

// const booleanCompare = (value1, value2) => {
//   return Number(a) - Number(b)
// }

exports.searchUser = (searchOptions) => {
  const { searchTerm, searchValue } = searchOptions;
  if(!searchValue) return [];
  if (searchTerm === '_id') {
    return userData.filter(user => user._id === Number(searchValue));
  };
  if (searchTerm === 'verified') {
    return (userData.filter(user => {
      if(user.hasOwnProperty(searchTerm)){
        return user.verified.toString() === searchValue.toLowerCase();
      }
    }
    ));
  };
  return userData.filter(user => searchValue !== '' && user[searchTerm].includes(searchValue));
}
