var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todolist', { title: 'BSIS_TODO_LIST',
    grade: req.query['grade'],
    class: req.query['class']
  });
});

module.exports = router;
