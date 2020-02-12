const request = require('request');
const fs = require('fs')
const url = process.argv[2]
const path = process.argv[3]

const fetcher = (url, path) => {
  request(url , (body) => {
    fs.writeFile(path, body, function(err) {
      if (err) throw err;
        console.log(`Saved to ${path}`)
      })
    })
};

fetcher(url, path)

// node fetcher.js https://www.google.com/ ./index.html