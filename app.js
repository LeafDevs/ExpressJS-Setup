
const express = require('express')
const app = express()
const port = 3000

const fs = require("fs");

const siteFiles = fs.readdirSync('./sites').filter(file => file.endsWith('.js'));
for (const file of siteFiles) {
  const site = require(`./sites/${file}`);
  console.log(`Registered site: ${site.name}`);
  app.get(site.name, (res,req) => {
    site.callback(res, req);
  });
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
