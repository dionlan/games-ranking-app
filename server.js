const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static('./dist/games-ranking-app'));
app.get('/ping', function(req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/games-ranking-app/'})
});

app.listen(port, () => {
   console.log('Server is UP! Port: ', port);
});