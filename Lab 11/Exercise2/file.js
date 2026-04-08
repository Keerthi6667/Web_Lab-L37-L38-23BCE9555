// Import File System module
const fs = require('fs');

// Step 1: Create a file
fs.writeFile('sample.txt', 'Hello, this is a Node.js file.', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }
    console.log('File created successfully');

    // Step 2: Read the file
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('File content:', data);

        // Step 3: Append data to file
        fs.appendFile('sample.txt', '\nThis is appended content.', (err) => {
            if (err) {
                console.log('Error appending file:', err);
                return;
            }
            console.log('Data appended successfully');

            // Step 4: Read updated file
            fs.readFile('sample.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log('Error reading updated file:', err);
                    return;
                }
                console.log('Updated content:', data);

                // Step 5: Delete the file
                fs.unlink('sample.txt', (err) => {
                    if (err) {
                        console.log('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully');
                });
            });
        });
    });
});