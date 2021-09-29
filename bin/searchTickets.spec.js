const searchTickets = require('./searchTickets');

jest.mock('fs', () => {
  const originalModule = jest.requireActual('fs');
  return {
    ...originalModule,
    readFileSync: () => JSON.stringify([{
      "_id": "674a19a1-c330-45fb-8b61-b4d77ba87130",
      "created_at": "2016-03-07T08:24:53-11:00",
      "type": "task",
      "subject": "A Drama in St. Pierre and Miquelon",
      "assignee_id": 14,
      "tags": [
        "Connecticut",
        "Arkansas",
        "Missouri",
        "Alabama"
      ]
    }, {
      "_id": "c73a0be5-e967-4948-b0a4-eff98d1a43ad",
      "created_at": "2016-06-12T09:32:30-10:00",
      "type": "problem",
      "subject": "A Catastrophe in Maldives",
      "assignee_id": 34,
      "tags": [
        "Virginia",
        "Virgin Islands",
        "Maine",
        "West Virginia"
      ]
    },]),
  };
});

/*
SearchTicket requires 2 values - searchTerm and SearchValue
*/

describe(' Search Ticket', () => {
  it('returns results when the search Value is valid', () => {
    const searchInput = {
      searchTerm: '_id',
      searchValue: '674a19a1-c330-45fb-8b61-',
    }
    const response = searchTickets.searchTicket(searchInput);
    expect(response).toStrictEqual([{
      "_id": "674a19a1-c330-45fb-8b61-b4d77ba87130",
      "created_at": "2016-03-07T08:24:53-11:00",
      "type": "task",
      "subject": "A Drama in St. Pierre and Miquelon",
      "assignee_id": 14,
      "tags": [
        "Connecticut",
        "Arkansas",
        "Missouri",
        "Alabama"
      ]
    }]);
  });

  it('returns empty when the search value does not exist', () => {
    const searchInput = {
      searchTerm: 'assignee_id',
      searchValue: null,
    }
    const response = searchTickets.searchTicket(searchInput);
    expect(response).toStrictEqual([]);
  });

  it('returns empty when search Value is not available ', () => {
    const searchInput = {
      searchTerm: '_id',
      searchValue: null,
    }
    const response = searchTickets.searchTicket(searchInput);
    expect(response).toStrictEqual([]);
  });

  it('returns empty when search Value is empty string', () => {
    const searchInput = {
      searchTerm: 'subject',
      searchValue: '',
    }
    const response = searchTickets.searchTicket(searchInput);
    expect(response).toStrictEqual([]);
  });

  it('returns valid data when search Value is valid (tags)', () => {
    const searchInput = {
      searchTerm: 'tags',
      searchValue: 'Vir',
    }
    const response = searchTickets.searchTicket(searchInput)
    expect(response).toStrictEqual([{
      "_id": "c73a0be5-e967-4948-b0a4-eff98d1a43ad",
      "created_at": "2016-06-12T09:32:30-10:00",
      "type": "problem",
      "subject": "A Catastrophe in Maldives",
      "assignee_id": 34,
      "tags": [
        "Virginia",
        "Virgin Islands",
        "Maine",
        "West Virginia"
      ]
    },]);
  });

  it('returns value when search value has valid number format (assignee_id)', () => {
    const searchInput = {
      searchTerm: 'assignee_id',
      searchValue: '14',
    }
    const response = searchTickets.searchTicket(searchInput)
    expect(response).toStrictEqual([{
      "_id": "674a19a1-c330-45fb-8b61-b4d77ba87130",
      "created_at": "2016-03-07T08:24:53-11:00",
      "type": "task",
      "subject": "A Drama in St. Pierre and Miquelon",
      "assignee_id": 14,
      "tags": [
        "Connecticut",
        "Arkansas",
        "Missouri",
        "Alabama"
      ]
    }]);
  });
})
