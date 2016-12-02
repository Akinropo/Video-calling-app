/**
 * Created by rishabhkhanna on 02/12/16.
 */
const express = require('express');
const app = express();
const peer = require('peer');
const path = require('path');

app.use(express.static(path.join(__dirname , 'public')));

app.use('/' , express.static(path.join(__dirname , 'public')));





srv = app.listen('8191' , ()=>{
console.log("server started at 8191");
});

var p2p = peer.ExpressPeerServer(srv, {
     debug: true
});

app.use('/peer' ,p2p);