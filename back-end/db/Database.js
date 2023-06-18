const moongose = require("mongoose");

const connectDatabase = () => {
  moongose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongoDB connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
