//app.js
var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var app = express();

var routes = require('./router3.js');

app.listen(3000, function() {
    console.log('익스프레스 서버를 시작했습니다.' + '3000');
});

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', routes);