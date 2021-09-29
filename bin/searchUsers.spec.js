const searchUsers = require('./searchUsers');

jest.mock('fs', () => {
  const originalModule = jest.requireActual('fs');
  return {
    ...originalModule,
    readFileSync: () => JSON.stringify([{
      "_id": 1,
      "name": "Francisca Rasmussen",
      "created_at": "2016-04-15T05:19:46-10:00",
      "verified": true
    },
    {
      "_id": 2,
      "name": "Cross Barlow",
      "created_at": "2016-06-23T10:31:39-10:00",
      "verified": false
    }]),
  };
});

/*
SearchUsers requires 2 values - searchTerm and SearchValue
SearchUsers searches the required data from the users.json file
*/

describe(' Search Users', () => {
  it('returns results when the search Value is valid', () => {
    const searchInput = {
      searchTerm: '_id',
      searchValue: 1,
    }
    const response = searchUsers.searchUser(searchInput)
    expect(response).toStrictEqual([{
      "_id": 1,
      "name": "Francisca Rasmussen",
      "created_at": "2016-04-15T05:19:46-10:00",
      "verified": true
    }])
  });

  it('returns empty when the search value does not exist', () => {
    const searchInput = {
      searchTerm: 'verified',
      searchValue: null,
    }

    const response = searchUsers.searchUser(searchInput)
    expect(response).toStrictEqual([])
  });

  it('returns empty when search Value is not available ', () => {
    const searchInput = {
      searchTerm: '_id',
      searchValue: null,
    }
    const response = searchUsers.searchUser(searchInput)
    expect(response).toStrictEqual([])
  });

  it('returns empty when search Value is empty string', () => {
    const searchInput = {
      searchTerm: 'name',
      searchValue: '',
    }
    const response = searchUsers.searchUser(searchInput)
    expect(response).toStrictEqual([])
  });

  it('returns empty when search Value is not valid format for boolean value', () => {
    const searchInput = {
      searchTerm: 'verified',
      searchValue: '45',
    }
    const response = searchUsers.searchUser(searchInput)
    expect(response).toStrictEqual([])
  });

  it('returns data when search Value is valid for boolean values', () => {
    const searchInput = {
      searchTerm: 'verified',
      searchValue: 'TRUE',
    }
    const response = searchUsers.searchUser(searchInput)
    expect(response).toStrictEqual([{
      "_id": 1,
      "name": "Francisca Rasmussen",
      "created_at": "2016-04-15T05:19:46-10:00",
      "verified": true
    }])
  });
})
