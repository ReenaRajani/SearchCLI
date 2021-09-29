const fs = require('fs');
const ticketsData = JSON.parse(fs.readFileSync('./data/tickets.json'));

exports.searchTicket = (searchOptions) => {
  const { searchTerm, searchValue } = searchOptions;
  if(searchValue === '') return [];
  if (searchTerm === 'assignee_id') {
    return ticketsData.filter(ticket => ticket.assignee_id === Number(searchValue));
  }
  if (searchTerm === 'tags') {
    return ticketsData.filter(ticket =>
      ticket.tags.find(element =>
        element.includes(searchValue)
      ))
  }
  return ticketsData.filter(ticket => ticket[searchTerm].includes(searchValue));
}
