const Mongoose = require("mongoose");

let database = "RegisterDB";
let port = "27017";
let host = "mongodb";
let uri = `mongodb://${host}:${port}/${database}`;

const retry = () => {
  return connect();
};

const connect = () => {
  Mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
      console.log(`Conection to ${database} successfully`);
    })
    .catch(error => {
      console.log(`An error happened trying to connect ${database} database`);
      console.log(error);
      setTimeout(retry, 5000);
    });

  Mongoose.Promise = global.Promise;
};

module.exports = {
  connect
};
