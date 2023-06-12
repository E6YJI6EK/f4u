const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { error } = require('console');

const app = express();

const PORT = 3000;
const domain = `http://localhost:${PORT}`;

// app.use(cors());
app.use(cors({credentials: true, origin: domain}))

app.use(express.json({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', domain); // Замените на ваше доменное имя фронтенда
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
  

app.use(express.static(path.resolve('../', 'dist')));
app.use(express.static(path.resolve('../', 'dist', 'assets')));
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('../', 'dist', 'index.html'));
});

app.post('/chatgpt', async (req, res) => {

    try {
        const promise = await axios.post(
            "http://127.0.0.1:5000",
            req.body
        );
    
        const { data } = promise; 

        if (!data) {
            throw new Error("data is null");
        }
    
        console.log(data);
        res.send(data);
    }
    catch (e) {
        console.log(e)
    }
});



app.listen(PORT, () => {
    console.log(`Port ${PORT} is started`);
});
