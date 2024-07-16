'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const { Server } = require('socket.io');

    // var mysql = require('mysql')
    // const dotenv = require('dotenv');
    // dotenv.config();

    // var db = mysql.createConnection({
    //   host: process.env.DB_HOST,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME
    // });

    // db.connect(function (err) {
    //   if (err) {
    //     console.error('error connecting: ' + err.stack);
    //     return;
    //   }
    //   console.log('connected  db');
    // });

    // Log any errors connected to the db


    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
      },
    });

 


    io.on('connection', (socket) => {
      console.log('a user connected' + socket.id);




      socket.on('comment_added', (comment) => {
        // console.log('comment_added', comment)
        // io.sockets.emit('comment_added', comment);
      })

      socket.on('disconnect', () => {
        console.log('a user disconnected');
      });

    })

    // socket.on('disconnect', function () {
    //   // Decrease the socket count on a disconnect, emit
    //   socketCount--
    //   io.sockets.emit('users connected', socketCount)
    // })

    // socket.on('new note', function (data) {
    //   // New note added, push to all sockets and insert into db
    //   comments.push(data)
    //   io.sockets.emit('new note', data)
    //   // Use node's db injection format to filter incoming data
    //   db.query('INSERT INTO comments (comment) VALUES (?)', data.note)
    // })

    // Check to see if initial query/notes are set
    // if (!isInitComments) {
    //   // Initial app start, run db query
    //   db.query('SELECT * FROM comments')
    //     .on('result', function (data) {
    //       // Push results onto the notes array
    //       comments.push(data)
    //     })
    //     .on('end', function () {
    //       // Only emit notes after query has been completed
    //       socket.emit('initial notes', comments)
    //     })

    //   isInitComments = true
    // } else {
    //   // Initial notes already exist, send out
    //   socket.emit('initial notes', comments)
    // }




    // Listen for the 'message' event from the client
    // socket.on('message', (message) => {
    //   console.log(`Received message from client: ${message}`);
    //   // Example: emit the message to all connected clients
    //   io.emit('message', `Received message from client: ${message}`);
    // });

    


  },




};