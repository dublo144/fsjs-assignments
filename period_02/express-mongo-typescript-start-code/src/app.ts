import express from 'express';
import cors from 'cors';
import userApi from './routes/userApi';
import { errorLogger, requestLogger } from './middleware/logger';

const app = express();

app.use(express.json());
app.use(requestLogger, cors());
app.use('/api/users', userApi);
app.use(errorLogger);

app.get('/api/dummy', (req, res) => {
  res.json({ msg: 'Hello' });
});

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT);
console.log(`Server started, listening on port: ${PORT}`);
module.exports.server = server;
