const server = require('./serve')
const router = require("./router")
const requestHandlers = require("./requestHandle")

var handle = {}
handle['/home'] = requestHandlers.home
handle['/about'] = requestHandlers.about
server.start(router.route,handle)