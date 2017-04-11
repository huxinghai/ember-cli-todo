var fs = require('fs'),
  path = require('path');

var orders = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/orders.json'), 'utf8'));

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var orderRouter = express.Router();

  orderRouter.get('/', function(req, res) {
    res.send({
      code: 200,
      data: {
        total_pages: Math.ceil(orders.length/2)
        total_count: orders.length,
        page: 1,
        rows: orders
      }
    });
  });

  orderRouter.post('/', function(req, res) {
    res.send({
      code: 403,
      msg: ["更新失败!"]
    });
  });

  orderRouter.get('/:id', function(req, res) {
    res.send({
      'orders': {
        id: req.params.id
      }
    });
  });

  orderRouter.put('/:id', function(req, res) {
    res.send({
      'orders': {
        id: req.params.id
      }
    });
  });

  orderRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/products', require('body-parser'));
  app.use('/api/v1/orders', orderRouter);
};
