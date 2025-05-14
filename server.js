
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentdb")
app.use(bodyParser.urlencoded({ extended: false }));
const user=mongoose.model("user", {
    first_name: String,
    last_name: String,
    email: String,
    mobile_no: String,
    feedback: String,

});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit-feedback', (req, res) => {
    const{first_name,last_name,email,mobile_no,feedback}=req.body;
    new user({first_name,last_name,email,mobile_no,feedback})
    .save()
        .then(() => {
            res.send("Data saved successfully!");
        })
        });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}
);