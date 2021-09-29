const fs = require('fs');

const userData = JSON.parse(fs.readFileSync('./data/users.json'));

exports.searchUser = (searchOptions) => {
  const { searchTerm, searchValue } = searchOptions;
  if(!searchValue) return [];
  if (searchTerm === '_id') {
    return userData.filter(user => user._id === Number(searchValue))
  }
  if (searchTerm === 'verified') {
    return (userData.filter(user =>
      (!!user.verfied && user.verified.toString()) === searchValue.toLowerCase()))
  }
  return userData.filter(user => searchValue !== '' && user[searchTerm].includes(searchValue))
}
