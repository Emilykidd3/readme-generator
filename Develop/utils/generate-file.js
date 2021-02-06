// uses fs
const fs = require('fs');

// writes file to md file
const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            // if theres an error reject
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};

// exports to index.js
module.exports = writeFile;