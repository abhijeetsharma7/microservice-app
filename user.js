import express from 'express';

let app = express();

app.get('/users', (req, res, next) => {
    res.send(["Abhijeet", "Shivanshu", "Vinay", "Anurag"]);
});

app.listen(3000, ()=> {
    console.log("Server running at 3000");
});
