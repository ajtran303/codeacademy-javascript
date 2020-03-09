// use the `return` keyword in a function to "capture" the results of an evaluated expression as OUTPUT for later use

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);
