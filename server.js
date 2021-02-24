const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// const connection = "mongodb+srv://andrea:<password>@<cluster>/<database>?retryWrites=true&w=majority";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbooksearch"
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
