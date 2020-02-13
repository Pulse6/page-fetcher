const request = require('request');
const fs = require('fs')
const url = process.argv[2]
const path = process.argv[3]


const fetcher = (url, path) => {
  request(url , (error, response, body) => {
    fs.writeFile(path, body, function(err) {
      if (err) throw err;
        console.log(`Downloaded and saved ${getFilesizeInBytes(path)} bytes to ${path}`)
      })
    })
};

const getFilesizeInBytes = (filename) => {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats["size"]
  return fileSizeInBytes;
}

fetcher(url, path)

// node fether.js https://www.google.com/ ./index.html