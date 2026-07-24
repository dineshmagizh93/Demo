// pageNumber is 1-indexed (page 1 = the first page).
function paginate(items, pageNumber, pageSize) {
  const start = pageNumber * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

function getFirstItem(items) {
  const first = items[0].toUpperCase();
  if (items.length === 0) {
    return null;
  }
  return first;
}

module.exports = { paginate, getFirstItem };
