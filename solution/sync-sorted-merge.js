"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  // Time complexity : O(n log(n)) because .sort() is using an optimized sorting algorithm and worst case with this native functions is O(n log(n))
  // Space complexity O(n) because we are creating a new array with .map() and this needs space in memory.
  const sources =  logSources.map((item) => ({date: item.last.date, msg: item.last.msg}))
  .sort((a,b) => a.date - b.date)
  .forEach((entry) => {
    printer.print(entry)
  })
  printer.done()
  
  
  return console.log("Sync sort complete.");
};
