import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
const app = express();

app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(cors())

import authRoute from './routes/auth_route';
import postRoute from './routes/post_route';
import chatRoute from './routes/auth_route';
import userRoute from './routes/auth_route';
app.use('/api/auth/', authRoute);
app.use('/api/user/', userRoute);
app.use('/api/post/', postRoute);
app.use('/api/chat/', chatRoute);


const server = http.createServer(app);
const io = new Server(server);
io.on('connection', () => {
    console.log("a connection has been made");
})

server.listen(process.env.PORT || 8000);
console.log(`Running node on ${process.env.PORT || 8000}`);
