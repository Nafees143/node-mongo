const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("How To Open Node");
})

app.listen(3000, () => console.log('Listenting to port 3000'));