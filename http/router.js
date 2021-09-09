const fs = require('fs')
const path = require('path')

function route(handle,pathname,res,req){
    console.log("about to"+ pathname)
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res,req)
    }else{
        console.log('no request')
        const content = fs.readFileSync('./404.html')
        res.writeHead(404,{"Content-type":"text/html"})
        res.write(content)
        res.end()
    }
}

exports.route = route