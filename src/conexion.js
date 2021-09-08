const mongoose = require('mongoose');


const uri = `mongodb://localhost:27017/node-demo`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))



// var mesage = new mongoose.Schema({
//  firstName: String,
//  lastName: String
// });

// var User = mongoose.model("User", nameSchema);

// app.use("/", (req, res) => {
//  res.sendFile(__dirname + "/index.html");
// });



// app.post("/addname", (req, res) => {
//  var myData = new User(req.body);
//  myData.save()
//  .then(item => {
//  res.send("item saved to database");
//  })
//  .catch(err => {
//  res.status(400).send("unable to save to database");
//  });
// });