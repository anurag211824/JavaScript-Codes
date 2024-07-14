const fs1 = require('fs');
const content1 = 'Hello, World! synchronus';
try {
  // Synchronously write to a file
  fs1.writeFileSync('file1.txt', content1);
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}


const fs2=require('fs')
const content2='Hello world! asynchronus'
fs2.writeFile('file2.txt', content2, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
      // asynchronously write to a file
    console.log('File written successfully');
  });
  

  // Synchronously: Blocking code execution until the file is written.
  // Asynchronously: Non-blocking, allowing other code to execute while 
  //the file is being written.