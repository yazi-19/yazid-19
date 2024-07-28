// Install dependencies
// npm install express body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    // Proses data di sini, misalnya simpan ke database

    res.send('Terima kasih atas pesan Anda!');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
