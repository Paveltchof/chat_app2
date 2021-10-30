
const http = require('http');
const socketio = require('socket.io');


const app = require('./app');
const WebSockets = require('./utils/WebSockets');

// Normalisation des ports

const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
const port = normalizePort(process.env.PORT || 3000);

app.set('port', port);

const server = http.createServer(app);



server.listen(port);
server.on("listening", () => {
console.log(`listening on port ${port}...`);


global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection)
})
