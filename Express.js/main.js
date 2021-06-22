const express = require('express');

const app = express();

// app.use((req, res) =>{
//     res.sendFile(__dirname + '/index.html')
// }).listen(3000);


app.use(express.urlencoded(true));
app.use(express.static('./public/'))
app.use((req, res) => {
    res.redirect('/about', '/contact');
});

app.listen(3000, ()=> console.log('Server is run'))