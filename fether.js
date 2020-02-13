const request = require('request');
const fs = require('fs')
const url = process.argv[2]
const path = process.argv[3]


const fetcher = (url, path) => {
  request(url , (error, response, body) => {
    fs.writeFile(path, body, function(err) {
      fs.stat(path, (err, stat) => {
        const size = stat.size
        if (err) throw err;
          console.log(`Downloaded and saved ${size} bytes to ${path}`)
        })
      })
    })
};

// const getFilesizeInBytes = (filename) => {
//   const stats = fs.statSync(filename)
//   const fileSizeInBytes = stats["size"]
//   return fileSizeInBytes;
// }

fetcher(url, path)

// node fether.js https://www.google.com/ ./index.html