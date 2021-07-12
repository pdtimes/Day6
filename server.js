const express = require('express'); //import express
const server= express();// initialiase

server.get('/', function(request,response){
    console.log(request.method);
    console.log(request.query.query1);
    console.log(request.query.query2);
    console.log(request.headers);
    console.log(request.url);
    console.log('value of accept header='+request.headers.accept);
    console.log('value of accept header='+request.headers['cache-control']);
    console.log(request.response);
    response.send('Hello World');
});

server.listen(4000,function(){
    console.log('server started .........');
})