var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Criando um objeto JSON mockado
  const mockData = {
    title: 'Express',
    message: 'Hello, welcome to the Express server!',
    data: {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      age: 28
    }
  };

  // Respondendo com o JSON mockado
  res.json(mockData);
});

module.exports = router;
