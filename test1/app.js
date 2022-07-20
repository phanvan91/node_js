const express = require('express');
const app = express();
const port = 8081;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

// Require user route
const userRoute = require('./routes/user');

// Khai báo static file
app.use(express.static('assets'))

app.get('/', function(req, res){
    res.send("<h2>This is my first app</h2>");
})

// Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use('/users', userRoute);

app.listen(port, function(){
    console.log("Your app running on port " + port);
});