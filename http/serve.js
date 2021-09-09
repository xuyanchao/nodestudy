const http = require("http")
const url = require('url');
const util = require('util');
const fs = require('fs')

const host = '127.0.0.1'
const port = '8080'

function start(route,handle){
    function request(req,res){
        console.log(req.url)
        let pathname = new URL(req.url,'http://127.0.0.1:8080').pathname;
        console.log(pathname)
        route(handle,pathname,res,req)
    }
    http.createServer(request).listen(port,host);
    console.log('server start')
}
 
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);

exports.start = start