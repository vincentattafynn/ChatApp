/*server.ts*/

const cors = require('cors');
const next = require('next');
const Pusher = require('Pusher');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Sentiment = require('sentiment');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.Port || 3000;

const app = next({dev});
const handler = app.getRequestHandler();
const sentiment = new Sentiment;

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});

app.prepare().then(() =>
{
    const server = express();
    
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));

    server.get('*', (req,res) => {
        return handler(req,res);
    });

    server.listen(port, err => {
        if(err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    })
})
.catch(ex =>{
    console.log(ex.stack);
    process.exit(1);
})