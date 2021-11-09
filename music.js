import express from 'express';

let app = express();

app.get('/musics', (req,res,next) => {
    res.status(200).send(['Bollywood', 'Hollywood', 'Tolllywood'])
});

app.listen(8000, () => {
    console.log('Server running on 8000')
});
