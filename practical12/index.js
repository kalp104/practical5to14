// Create a program that reads a file asynchronously using callbacks and displays
// its contents.

const fs = require('fs');

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}
const filePath = 'Data.txt';
readFileAsync(filePath, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:');
    console.log(data);
  }
});


 

