let connection;
const { stdin, stdout } = require('process');
const readline = require('readline');

const setInput = (conn) => {
  connection = conn;
  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  })

  rl.on('line', (input)=> {
    connection.write(input);
    rl.close();
  });
};

module.exports = {setInput};