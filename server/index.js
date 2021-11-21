const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8000;
const csv = require("csv-parser")
const cors = require('cors')
const corsOption = { header:'http://localhost:3000', Credential : true}
const results = [];

app.use(cors(corsOption))

app.get('/csv',(req,res)=>{
    fs.createReadStream('../data/csv.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results);
        res.send(results)
    });

})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});