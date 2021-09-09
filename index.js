/** @format */

var http = require("http");
// console.log(http)
const os = require("os");
// console.log(os.cpus());
const target = process.env.npm_lifecycle_event;
console.log(process.argv);
console.log(target);
console.log(process.env.npm_package_config_sb);
var app = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.write("我是node");
        res.end("hello word");
    }
});
app.listen("8888", () => {
    console.log("我应经启动了");
});
