const fs1 = require('fs');
const additionalContent1 = '\nThis is appended content.';
try {
  // Synchronously append to a file
  fs1.appendFileSync('file1.txt', additionalContent1);
  console.log('Content appended successfully');
} catch (err) {
  console.error('Error appending to file:', err);
}


const fs2 = require('fs');
const additionalContent2 = '\nThis is appended content.';
// Asynchronously append to a file
fs2.appendFile('file2.txt', additionalContent2, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended successfully');
});
