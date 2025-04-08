const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send("welcome to food server ")
});


const PORT= 8081;

app.listen(PORT, () => {        
    console.log(`Server is running on port ${PORT}`);
});