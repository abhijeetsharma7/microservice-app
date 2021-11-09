import express from 'express';

let app = express();

app.get('/users', (req, res, next) => {
    res.send(["User1", "User2", "User3", "User4"]);
});

app.listen(3000, ()=> {
    console.log("Server running at 3000");
});
