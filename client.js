const {connect} = require('./createConnection');
const {setInput} = require('./setInput');
const conn = connect();
setInput(conn);


