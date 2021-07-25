import express, { Express } from "express";
import api from "./api";
import dotenv from 'dotenv'
import http, { Server } from 'http'
dotenv.config()
const app: Express = express();
const port = normalizePort(process.env.PORT || '3001')
app.use(express.json());
app.set("port", port);
app.listen(3001);
app.use("/api/", api);

const server: Server = http.createServer(app)
server.listen(port)
server.setTimeout(0)
server.on('error', onError)



function normalizePort(val: string) {
    const port: number = parseInt(val, 10)
  
    if (isNaN(port)) {
      // named pipe
      return val
    }
  
    if (port >= 0) {
      // port number
      return port
    }
  
    return false
  }
  function onError(error: { syscall: string; code: string }) {
    if (error.syscall !== 'listen') {
      throw error
    }
  
    const bind: string = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
        break
      default:
        throw error
    }
  }
  