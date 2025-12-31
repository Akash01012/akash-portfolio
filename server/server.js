const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/projects');
const experienceRoutes= require('./routes/experience');
const apisRoutes = require('./routes/apis');
require('dotenv').config();
const app = express();
// Middleware
app.use(cors());

app.use(express.json());
app.get('/ping', (req, res) => res.status(200).send('OK'));
app.use('/api/projects',projectRoutes);
app.use('/api/experience',experienceRoutes);
app.use('/api/apis',apisRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(' MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
