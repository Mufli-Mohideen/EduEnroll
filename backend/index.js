const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const studentRoutes = require('./routes/Student');
const courseRoutes = require('./routes/Course');

const app = express();

app.use(bodyParser.json());
app.use('/api', studentRoutes);
app.use('/api', courseRoutes);

sequelize.sync({ force: true }).then(() => {
    console.log('Database synchronized!');
    app.listen(3001, () => console.log('Server running on port 3001'));
});
