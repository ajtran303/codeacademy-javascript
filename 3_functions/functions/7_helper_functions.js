// helper functions help with coding larger tasks by abstracting the problem into smaller components.


// monitorCount() is a helper function because it is called in another function
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
