const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/route', function (req: any, res: any) {
  res.send('Hello');
});

// Use router with a prefix
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});
