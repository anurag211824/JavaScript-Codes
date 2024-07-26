const fs1 = require('fs');
// Asynchronously delete a file
fs1.unlink('file4.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully');
});
	
const fs2 = require('fs');
try {
  // Synchronously delete a file
  fs2.unlinkSync('file5.txt');
  console.log('File deleted successfully');
} catch (err) {
  console.error('Error deleting file:', err);
}
