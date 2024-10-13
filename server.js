require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3501;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/webkeszites', require('./routes/mainRoutes'));
app.use('/api/webkeszites/backend', require('./routes/backendRoutes'));
app.use('/api/webkeszites/frontend', require('./routes/frontendRoutes'));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api/webkeszites`);
});
