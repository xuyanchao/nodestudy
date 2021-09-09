const fs = require('fs')

function home(res){
    console.log('request handler home was called')

    const content = fs.readFileSync('./home.html')
    res.writeHead(200,{"Content-type":"text/html"})
    res.write(content)
    res.end()
}

function about(res){
    console.log("page about was called")
    var content = fs.readFileSync("./about.html")
    res.writeHead(200,{"Content-type":"text/html"})
    res.write(content)
    res.end()
}

exports.home = home;
exports.about = about;