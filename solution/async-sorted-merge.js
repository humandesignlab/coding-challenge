"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    // Time complexity : O(n log(n)) because .sort() is using an optimized sorting algorithm and worst case with this native functions is O(n log(n))
    // Space complexity O(n) because we are creating a new array with .map() and this needs space in memory.
    const sources = logSources.map((item) => ({ date: item.last.date, msg: item.last.msg })).sort((a, b) => a.date - b.date)
    const sortedSources = sources.forEach((entry) => {
      printer.print(entry)
    })
    try {
      resolve(sortedSources)
      resolve(console.log("Async sort complete."));
      printer.done()
    } catch (err) {
      reject(console.log(err))
    }

  });
};
