let express = require('express');

let app = express();

app.use(express.static(_dirname+'dist/portfolio'));

app.get('/*', (req, resp) => {
    resp.sendFile(_dirname+'dist/portfolio/index.html');
});

app.listen(process.env.PORT || 8080);