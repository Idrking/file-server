const net = require('net');
const server = net.createServer();
const fs = require('fs');

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

server.on('connection', (client) => {
  client.setEncoding('utf8'); // interpret data as text
  console.log('New client connected!');
  
  client.on('data', (data) => {
    let fileName = data;
    fs.readFile(fileName, (err, data) => {
      if (err) client.write(err);
      let returnedFile = `${fileName}:${data}`;
      client.write(returnedFile);
    });
  });
});

