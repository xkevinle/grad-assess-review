const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const router = require('./router.js')
//serve the static file

//json parse all incoming files
app.use(express.json())
//do the url encoding thing
app.use(express.urlencoded({extended : true}));

//change directory path if needed
// app.use()

app.use(express.static(path.join(__dirname, '../client')))

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

//make the routers
//app.use()
app.use('/', router)


//404 error handler
app.use('/*', (req, res) =>
res.status(404).send('Ya done fucked up Ernie')
);

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  }
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

//specify port to listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})