const net = require('net');
const fs = require('fs');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });

  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    const returnedFile = data.split(':')
    fs.writeFile(returnedFile[0], returnedFile[1], ()=> {
      console.log(`Received ${returnedFile[0]} from Server`)
      process.exit();
    })
  })

  conn.on('connect', () => {
    console.log('PLEASE ENTER THE FILE YOU WISH TO RETRIEVE');
  })

  return conn;

}

module.exports = {connect};