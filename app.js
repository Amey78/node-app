const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Ansible deployed app!');
}).listen(3000);
