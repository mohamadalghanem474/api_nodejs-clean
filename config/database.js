const mongoose = require("mongoose");

//conect to database mongoDB
const dbConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.URI_DATABASE)
    .then(() => {
      console.log(`✅ Database Connected`);
    }).catch((err)=>{
      console.log(`error: ${err}`)
    })
};
module.exports = dbConnection;
