const mongose = require("mongoose");
const userschema = new mongose.Schema({
  first_name: String,
    last_name: String,
  email: String,
    mobile_no: String,
    feedback: String,
    
});
module.export = mongose.model("user", userschema);
