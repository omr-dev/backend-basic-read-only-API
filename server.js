import express from 'express';
import { siteData } from './src/models.js';
import { siteView } from './src/views.js';

const app = express();
const port = process.env.PORT || 3007;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(siteView(siteData));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
