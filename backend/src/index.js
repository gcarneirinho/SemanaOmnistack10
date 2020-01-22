const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_SECRET}@cluster0-fno1d.mongodb.net/test?retryWrites=true&w=majority`,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
} )

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);