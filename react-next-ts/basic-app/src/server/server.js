import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initalMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Basic React SSR App</title>
        <link rel="stylesheet" href="/main.css">
      </head>
      <body>
        <div id="root">${initalMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`); });